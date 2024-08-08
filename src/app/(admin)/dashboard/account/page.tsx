import { getUserAuth } from "@/lib/auth/utils";
import type { Metadata } from "next";
import { SectionTitle } from "../SectionTitle";
import UserSettings from "./UserSettings";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Manage your account settings and preferences",
};

export default async function Account() {
  const { session } = await getUserAuth();

  return (
    <main>
      <SectionTitle title="Account" currentResource="account" />
      <div className="space-y-4">
        <UserSettings session={session} />
      </div>
    </main>
  );
}
