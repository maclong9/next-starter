import { SidebarLink } from "@/components/layout/SidebarItems";
import { HomeIcon, SettingsIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
];

export const additionalLinks: AdditionalLinks[] = [
  {
    title: "Settings",
    links: [{ href: "/settings", title: "Settings", icon: SettingsIcon }],
  },
];