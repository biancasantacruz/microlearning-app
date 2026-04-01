import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  console.log("[auth/callback] URL recebida:", request.url);
  console.log("[auth/callback] code:", code ?? "AUSENTE");

  if (!code) {
    console.error("[auth/callback] Erro: code ausente na query string");
    return NextResponse.redirect(`${origin}/?error=missing_code`);
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
      `${origin}/?error=${encodeURIComponent(error.message)}`
    );
  }

  if (!data.user) {
    console.error("[auth/callback] Erro: sessão criada mas user é null");
    return NextResponse.redirect(`${origin}/?error=no_user`);
  }

  console.log("[auth/callback] Sessão criada com sucesso. user_id:", data.user.id);
  console.log("[auth/callback] created_at:", data.user.created_at);
  console.log("[auth/callback] last_sign_in_at:", data.user.last_sign_in_at);

  const { created_at, last_sign_in_at } = data.user;

  const isFirstAccess =
    !last_sign_in_at ||
    Math.abs(
      new Date(last_sign_in_at).getTime() - new Date(created_at).getTime()
    ) < 10_000;

  const destination = isFirstAccess ? "/onboarding" : "/trilha";
  console.log("[auth/callback] isFirstAccess:", isFirstAccess, "→ redirecionando para", destination);

  return NextResponse.redirect(`${origin}${destination}`);
}
