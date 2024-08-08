"use client";

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
      className="w-full border-t border-border pt-4"
    >
      <CollapsibleTrigger
        asChild
        className={cn(
          "flex items-center justify-between w-full p-2 cursor-pointer bg-card hover:bg-card/50",
          isOpen ? "rounded-t-lg" : "rounded-lg"
        )}
      >
        <div className="flex items-center justify-between w-full p-2 cursor-pointer bg-card hover:bg-card/50">
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
          "space-y-2 bg-card/75 p-2",
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
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
}