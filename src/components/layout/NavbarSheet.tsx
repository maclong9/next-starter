'use client'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AuthSession } from "@/lib/auth/utils";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import SidebarItems from "./SidebarItems";
import UserDetails from "./UserDetails";

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
        <div className="flex-grow space-y-4 mt-8">
          <SidebarItems closeSheet={() => setOpen(false)} />
        </div>
        <UserDetails session={session} closeSheet={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}