import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CmsDashboard from "@/components/admin/CmsDashboard";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/admin/login");
  }

  const {
    data: admin,
    error: adminError,
  } = await supabase
    .from("admin_users")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !admin) {
    redirect(
      "/admin/login?error=This account does not have admin access."
    );
  }

  return <CmsDashboard userEmail={user.email ?? ""} adminRole={admin.role ?? "admin"} />;
}