import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <main className="max-w-lg mx-auto my-4 bg-popover p-10 rounded-lg">
      <h1 className="font-bold text-center">Create an account</h1>
      <SignUpForm />
      <div className="mt-4 text-muted-foreground text-center">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-secondary-foreground underline">
          Sign in
        </Link>
      </div>
    </main>
  );
}