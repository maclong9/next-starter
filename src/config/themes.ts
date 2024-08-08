export interface Theme {
  name: string;
  label: string;
  description: string;
  bgClass: string;
  contentClass: string;
  textClass: string;
}

export const themes: Theme[] = [
  {
    name: "light",
    label: "Light",
    description: "Bright and clear, perfect for daytime use",
    bgClass: "bg-white",
    contentClass: "bg-gray-100",
    textClass: "bg-gray-800",
  },
  {
    name: "dark",
    label: "Dark",
    description: "Easy on the eyes, ideal for low-light environments",
    bgClass: "bg-gray-950",
    contentClass: "bg-gray-800",
    textClass: "bg-gray-200",
  },
  {
    name: "system",
    label: "System",
    description: "Automatically adjusts to your device's theme settings",
    bgClass: "bg-white dark:bg-gray-950",
    contentClass: "bg-gray-100 dark:bg-gray-800",
    textClass: "bg-gray-800 dark:bg-gray-200",
  },
  {
    name: "eldritch",
    label: "Eldritch",
    description: "A dark theme inspired by Lovecraftian horror",
    bgClass: "bg-eldritch-background",
    contentClass: "bg-eldritch-content",
    textClass: "bg-eldritch-text",
  },
];