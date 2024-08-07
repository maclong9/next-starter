import { Viewport } from "next";

export const ViewportConfig: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "normal",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};