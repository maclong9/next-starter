"use client";

import { Button } from "@/components/ui/button";
import { themes } from "@/config/themes";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function ThemeButtons() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-start flex-wrap gap-2 max-w-4xl mx-auto">
      {themes.map((t) => (
        <Button
          key={t.name}
          variant="ghost"
          className={cn(
            "flex-grow sm:flex-grow-0 h-auto justify-start max-w-96",
            theme === t.name && "border-2 border-primary",
          )}
          onClick={() => setTheme(t.name)}
        >
          <div className="flex items-center">
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
              <p className="text-sm text-muted-foreground text-wrap">{t.description}</p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}