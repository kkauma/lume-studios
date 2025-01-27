import { create } from "zustand";
import { supabase } from "@/lib/supabase";

interface AuthStore {
  isLoading: boolean;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  logout: async () => {
    set({ isLoading: true });
    try {
      // Sign out from Supabase
      await supabase.auth.signOut();

      // Clear all auth-related cookies
      const cookies = document.cookie.split(";");

      for (let cookie of cookies) {
        const cookieName = cookie.split("=")[0].trim();
        // Delete each cookie
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      }

      // Clear all storage
      localStorage.clear();
      sessionStorage.clear();

      // Invalidate and refetch all queries
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      window.location.href = "/";
    } finally {
      set({ isLoading: false });
    }
  },
}));
