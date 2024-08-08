import { SidebarLink } from "@/components/layout/SidebarItems";
import { HomeIcon, Settings } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Dashboard", icon: HomeIcon },
];

export const additionalLinks: AdditionalLinks[] = [];

export const accountLinks: SidebarLink[] = [
  { href: "/dashboard/account", title: "Settings", icon: Settings },
];