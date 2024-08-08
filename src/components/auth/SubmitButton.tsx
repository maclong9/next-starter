"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  const pathname = usePathname();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      Sign{pending ? "ing" : ""} {pathname.includes("sign-up") ? "up" : "in"}
    </Button>
  );
};

export default SubmitButton;