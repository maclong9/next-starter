"use client";

import { Button } from "@/components/ui/button";
import { themes } from "@/config/themes";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function ThemeButtons({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      {themes.map((t) => (
        <Button
          key={t.name}
          variant="ghost"
          className={cn(
            "w-full h-auto justify-start",
            theme === t.name && "border-2 border-primary",
          )}
          onClick={() => setTheme(t.name)}
        >
          <div className="flex items-center w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                <div className={cn("space-y-2 rounded-sm p-2", t.bgClass)}>
                  <div
                    className={cn(
                      "space-y-2 rounded-md p-2 shadow-sm",
                      t.contentClass,
                    )}
                  >
                    <div
                      className={cn("h-2 w-[40px] rounded-lg", t.textClass)}
                    />
                    <div
                      className={cn("h-2 w-[50px] rounded-lg", t.textClass)}
                    />
                  </div>
                  <div
                    className={cn(
                      "flex items-center space-x-2 rounded-md p-2 shadow-sm",
                      t.contentClass,
                    )}
                  >
                    <div className={cn("h-3 w-3 rounded-full", t.textClass)} />
                    <div
                      className={cn("h-2 w-[40px] rounded-lg", t.textClass)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <span className="font-medium">{t.label}</span>
              <p className="text-sm text-muted-foreground">{t.description}</p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
