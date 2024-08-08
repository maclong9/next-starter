import { SidebarLink } from "@/components/layout/SidebarItems";
import { HomeIcon, Settings } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
];

export const additionalLinks: AdditionalLinks[] = [];

export const accountLinks: SidebarLink[] = [
  { href: "/account", title: "Settings", icon: Settings },
];