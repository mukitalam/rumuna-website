"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function redirectWithError(message: string): never {
  redirect(`/admin/login?error=${encodeURIComponent(message)}`);
}

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirectWithError("Email and password are required.");
  }

  const supabase = await createClient();

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error || !data.user) {
    redirectWithError("Invalid email or password.");
  }

  const { data: admin, error: adminError } =
    await supabase
      .from("admin_users")
      .select("role")
      .eq("user_id", data.user.id)
      .maybeSingle();

  if (adminError || !admin) {
    await supabase.auth.signOut({
      scope: "local",
    });

    redirectWithError(
      "This account does not have admin access."
    );
  }

  redirect("/admin/dashboard");
}