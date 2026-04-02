import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || origin;

  console.log("[auth/callback] URL recebida:", request.url);
  console.log("[auth/callback] code:", code ?? "AUSENTE");

  if (!code) {
    console.error("[auth/callback] Erro: code ausente na query string");
    return NextResponse.redirect(`${siteUrl}/?error=missing_code`);
  }

  const supabase = await createClient();

  console.log("[auth/callback] Trocando code por sessão...");
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("[auth/callback] Erro no exchangeCodeForSession:", {
      message: error.message,
      status: error.status,
      code: (error as any).code,
    });
    return NextResponse.redirect(
      `${siteUrl}/?error=${encodeURIComponent(error.message)}`
    );
  }

  if (!data.user) {
    console.error("[auth/callback] Erro: sessão criada mas user é null");
    return NextResponse.redirect(`${siteUrl}/?error=no_user`);
  }

  console.log("[auth/callback] Sessão criada com sucesso. user_id:", data.user.id);

  const { data: profile } = await supabase
    .from("profiles")
    .select("onboarding_completed")
    .eq("user_id", data.user.id)
    .single();

  const destination =
    !profile || !profile.onboarding_completed ? "/onboarding" : "/trilha";

  console.log("[auth/callback] profile:", profile, "→ redirecionando para", destination);

  return NextResponse.redirect(`${siteUrl}${destination}`);
}
