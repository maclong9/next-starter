"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { additionalLinks, defaultLinks } from "@/config/nav";
import { cn } from "@/lib/utils";
import { AlignRight, LogOut } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden border-b mb-4 pb-2 w-full">
      <nav className="flex justify-between w-full items-center">
        <div className="font-semibold text-lg">Logo</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <AlignRight />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-4 mt-8">
              <NavLinkGroup
                links={defaultLinks}
                setOpen={setOpen}
                title="Navigation"
              />
              {additionalLinks.map((group) => (
                <NavLinkGroup
                  key={group.title}
                  title={group.title}
                  links={group.links}
                  setOpen={setOpen}
                  border
                />
              ))}
              <li>
                <Button variant="ghost" className="w-full justify-start p-0">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

interface NavLinkGroupProps {
  links: { title: string; href: string; icon: React.ComponentType<any> }[];
  title?: string;
  setOpen: (open: boolean) => void;
  border?: boolean;
}

function NavLinkGroup({ links, title, setOpen, border }: NavLinkGroupProps) {
  const pathname = usePathname();

  return (
    <li className={cn(border && "border-t border-border pt-4 mt-4")}>
      {title && (
        <h4 className="mb-2 uppercase text-muted-foreground tracking-wider text-sm">
          {title}
        </h4>
      )}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.title} onClick={() => setOpen(false)}>
            <Link
              href={link.href}
              className={cn(
                "flex items-center text-muted-foreground hover:text-primary",
                pathname === link.href && "text-primary font-semibold",
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
