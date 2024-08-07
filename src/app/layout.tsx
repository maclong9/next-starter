import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MetadataConfig, ViewportConfig } from "@/config/metadata";
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
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}