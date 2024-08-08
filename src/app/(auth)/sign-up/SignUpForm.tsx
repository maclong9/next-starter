"use client";

import { useFormState } from "react-dom";

import { signUpAction } from "@/lib/actions/users";

import SubmitButton from "@/components/auth/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUpAction, {
    error: "",
  });

  const { toast } = useToast()

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",

      });
    }
  }, [state.error, toast]);

  return (
    <>
      <form action={formAction}>
        <Label htmlFor="email" className="text-muted-foreground">
          Email
        </Label>
        <Input name="email" type="email" id="email" required />
        <br />
        <Label htmlFor="password" className="text-muted-foreground">
          Password
        </Label>
        <Input type="password" name="password" id="password" required />
        <br />
        <Label htmlFor="confirmPassword" className="text-muted-foreground">
          Confirm Password
        </Label>
        <Input type="password" name="confirmPassword" id="confirmPassword" required />
        <br />
        <SubmitButton />
      </form>
    </>
  );
}