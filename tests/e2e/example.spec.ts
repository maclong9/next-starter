import { metadata } from "@/app/layout";
import { expect, test } from "@playwright/test";

test("homepage has correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(metadata.title as string);
});
