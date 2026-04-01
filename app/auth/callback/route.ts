import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/?error=missing_code`);
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    return NextResponse.redirect(`${origin}/?error=auth_failed`);
  }

  const { created_at, last_sign_in_at } = data.user;

  const isFirstAccess =
    !last_sign_in_at ||
    Math.abs(
      new Date(last_sign_in_at).getTime() - new Date(created_at).getTime()
    ) < 10_000;

  const destination = isFirstAccess ? "/onboarding" : "/trilha";

  return NextResponse.redirect(`${origin}${destination}`);
}
