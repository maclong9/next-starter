'use client'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AuthSession } from "@/lib/auth/utils";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import { NavigationContent } from "./NavigationContent";

export default function NavbarSheet({ session }: { session: AuthSession }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <AlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <NavigationContent session={session} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}