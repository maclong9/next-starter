import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MetadataConfig } from "@/config/metadata";
import { ViewportConfig } from "@/config/viewport";
import "./globals.css";

export const metadata = MetadataConfig;
export const viewport = ViewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "system", "eldritch"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}