import SignOutBtn from "@/components/auth/SignOutBtn";
import { getUserAuth } from "@/lib/auth/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your profile and account information",
};

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="">
      <h1 className="font-bold my-2">Profile</h1>
      <pre className="bg-secondary p-4 rounded-lg my-2">
        {JSON.stringify(session, null, 2)}
      </pre>
      <SignOutBtn />
    </main>
  );
}
