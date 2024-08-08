"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import ThemeButtons from "@/components/theme/ThemeButtons";
import { updateUser } from "@/lib/actions/users";
import { AccountCard, AccountCardBody, AccountCardFooter } from "./AccountCard";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function UpdateThemeCard() {
  const { theme } = useTheme();
  const [state, formAction] = useFormState(updateUser, {
    error: "",
  });

  useEffect(() => {
    if (state.success === true) toast.success("Updated Theme");
    if (state.error) toast.error("Error", { description: state.error });
  }, [state]);

  return (
    <AccountCard
      params={{
        header: "Your Theme",
        description: "Choose a theme for your account.",
      }}
    >
      <AccountCardBody>
        <ThemeButtons />
      </AccountCardBody>
      <AccountCardFooter description="The theme will be applied immediately." />
    </AccountCard >
  );
}

const Submit = () => {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>Update Theme</Button>;
};
