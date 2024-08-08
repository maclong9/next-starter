"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LucideIcon } from "lucide-react";

import { additionalLinks, defaultLinks } from "@/config/nav";
import { cn } from "@/lib/utils";

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SidebarItems = ({ closeSheet }: { closeSheet?: () => void }) => {
  return (
    <>
      <h4 className="px-2 mb-2 text-xs uppercase text-muted-foreground tracking-wider">
        Navigation
      </h4>
      <SidebarLinkGroup links={defaultLinks} closeSheet={closeSheet} />
      {additionalLinks.length > 0
        ? additionalLinks.map((l) => (
          <SidebarLinkGroup
            links={l.links}
            title={l.title}
            border
            key={l.title}
            closeSheet={closeSheet}
          />
        ))
        : null}
    </>
  );
};
export default SidebarItems;

const SidebarLinkGroup = ({
  links,
  title,
  border,
  closeSheet,
}: {
  links: SidebarLink[];
  title?: string;
  border?: boolean;
  closeSheet?: () => void;
}) => {
  const fullPathname = usePathname();
  const pathname = "/" + fullPathname.split("/")[1];

  return (
    <div className={border ? "border-border border-t my-8 pt-4" : ""}>
      {title ? (
        <h4 className="px-2 mb-2 text-xs uppercase text-muted-foreground tracking-wider">
          {title}
        </h4>
      ) : null}
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <SidebarLink link={link} active={pathname === link.href} closeSheet={closeSheet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarLink = ({
  link,
  active,
  closeSheet,
}: {
  link: SidebarLink;
  active: boolean;
  closeSheet?: () => void;
}) => {
  return (
    <Link
      href={link.href}
      className={cn(
        "group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground hover:shadow rounded-md w-full",
        active && "text-primary font-semibold",
      )}
      onClick={closeSheet}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "opacity-0 left-0 h-6 w-[4px] absolute rounded-r-lg bg-primary",
            active ? "opacity-100" : "",
          )}
        />
        <link.icon className="h-3.5 mr-1" />
        <span>{link.title}</span>
      </div>
    </Link>
  );
};
