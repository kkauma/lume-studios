import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "@/lib/supabase";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;

      try {
        const { data: existingUser } = await supabase
          .from("users")
          .select()
          .eq("email", user.email)
          .single();

        if (!existingUser) {
          const { error } = await supabase.from("users").insert({
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: "FREE",
          });

          if (error) throw error;
        }

        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      }
    },
    async session({ token, session }) {
      if (token && session.user) {
        const { data: user } = await supabase
          .from("users")
          .select()
          .eq("email", session.user.email!)
          .single();

        if (user) {
          session.user.id = user.id;
          session.user.role = user.role;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
