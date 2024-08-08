import { Metadata } from "next";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <main className="max-w-lg mx-auto my-4 bg-popover p-10 rounded-lg">
      <h1 className="font-bold text-center">Sign in to your account</h1>
      <SignInForm />
    </main>
  );
}