import { BackButton } from "@/components/shared/BackButton";
import { getUserAuth } from "@/lib/auth/utils";
import type { Metadata } from "next";
import UserSettings from "./UserSettings";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Manage your account settings and preferences",
};

export default async function Account() {
  const { session } = await getUserAuth();

  return (
    <main>
      <h1 className="font-semibold my-4 flex items-center gap-1">
        <BackButton currentResource="account" />
        Account
      </h1>
      <div className="space-y-4">
        <UserSettings session={session} />
      </div>
    </main>
  );
}
