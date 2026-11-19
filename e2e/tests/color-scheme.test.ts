import { defaultLocale } from "@/lib/i18n/locales";
import { expect, test } from "~/e2e/lib/test";

test.describe("color scheme", () => {
	test.use({ colorScheme: "dark" });

	test("uses light mode even when dark mode was previously selected", async ({
		createIndexPage,
		page,
	}) => {
		await page.addInitScript(() => {
			localStorage.setItem("uiColorScheme", "dark");
		});

		const { indexPage } = await createIndexPage(defaultLocale);
		await indexPage.goto();

		await expect(page.locator("html")).toHaveAttribute("data-ui-color-scheme", "light");
		await expect(page.locator("html")).toHaveCSS("color-scheme", "light");
		await expect(page.locator('input[name="color-scheme"]')).toHaveCount(0);
	});
});
