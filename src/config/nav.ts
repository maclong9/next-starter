import { SidebarLink } from "@/components/layout/SidebarItems";
import { HomeIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
];

export const additionalLinks: AdditionalLinks[] = [];