"use client";

import { useClickOutside } from "@/hooks/use-click-outside";
import { signOutAction } from "@/lib/actions/users";
import { AuthSession } from "@/lib/auth/utils";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
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
  const collapsibleRef = useRef<HTMLDivElement>(null);

  useClickOutside(collapsibleRef, () => setIsOpen(false));

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border-t border-border pt-4 w-full"
      ref={collapsibleRef}
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
      <AnimatePresence initial={false}>
        {isOpen && (
          <CollapsibleContent
            forceMount
            asChild
          >
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className={cn(
                "space-y-2 bg-muted/40 p-2 overflow-hidden",
                isOpen ? "rounded-b-lg" : "rounded-lg"
              )}
            >
              <Link href="/account">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
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
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
}