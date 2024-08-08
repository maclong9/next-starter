"use client";
import { AuthSession } from "@/lib/auth/utils";
import UpdateEmailCard from "./UpdateEmailCard";
import UpdateNameCard from "./UpdateNameCard";
import UpdateThemeCard from "./UpdateThemeCard";

export default function UserSettings({
  session,
}: {
  session: AuthSession["session"];
}) {
  return (
    <>
      <UpdateNameCard name={session?.user.name ?? ""} />
      <UpdateEmailCard email={session?.user.email ?? ""} />
      <UpdateThemeCard />
    </>
  );
}
