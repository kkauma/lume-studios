export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          image: string | null;
          role: "FREE" | "PRO" | "ENTERPRISE";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          image?: string | null;
          role?: "FREE" | "PRO" | "ENTERPRISE";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          image?: string | null;
          role?: "FREE" | "PRO" | "ENTERPRISE";
          created_at?: string;
          updated_at?: string;
        };
      };
      contents: {
        Row: {
          id: string;
          title: string;
          content: string;
          type: string;
          status: string;
          metadata: Json;
          created_at: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          type: string;
          status: string;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          type?: string;
          status?: string;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
          user_id?: string;
        };
      };
    };
  };
}
