import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import OnboardingForm from "./OnboardingForm";

export default async function OnboardingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return <OnboardingForm userId={user.id} />;
}
