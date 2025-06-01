const { test, expect } = require('@playwright/test')

test("Verify the page title", async function ({ page }) {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})