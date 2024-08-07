import ThemeButtons from "@/components/theme/ThemeButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Customize your app settings and appearance",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="space-y-4 my-4">
        <div>
          <h3 className="text-lg font-medium">Appearance</h3>
          <p className="text-sm text-muted-foreground">
            Customize the appearance of the app. Automatically switch between
            day and night themes.
          </p>
        </div>
        <ThemeButtons />
      </div>
    </div>
  );
}
