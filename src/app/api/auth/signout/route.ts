import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[SIGNOUT_ERROR]", error);
    return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
  }
}
