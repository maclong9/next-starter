"use client";

import { signOutAction } from "@/lib/actions/users";
import { AuthSession } from "@/lib/auth/utils";
import { cn } from "@/lib/utils";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export default function UserDetails({ session }: { session: AuthSession }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = session.session ?? { user: null };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border-t border-border pt-4 w-full"
    >
      <CollapsibleTrigger
        asChild
        className={cn(
          "flex items-center justify-between w-full p-3 cursor-pointer bg-card hover:bg-card/50",
          isOpen ? "rounded-t-lg" : "rounded-lg"
        )}
      >
        <div className="flex items-center justify-between w-full p-3 cursor-pointer bg-muted/40 hover:bg-muted/30">
          <div className="text-muted-foreground">
            <p>{user?.name}</p>
            <p className="font-light pr-4">{user?.email}</p>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarFallback className="border-border border-2 text-muted-foreground">
              {user?.name
                ?.split(" ")
                .map((word) => word[0].toUpperCase())
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "space-y-2 bg-muted/40 p-2",
          isOpen ? "rounded-b-lg" : "rounded-lg"
        )}
      >
        <Link href="/account">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <form action={signOutAction}>
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-red-500"
            type="submit"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
}