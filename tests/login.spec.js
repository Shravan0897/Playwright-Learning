const { test, expect } = require('@playwright/test')

test("Verify Login", async function ({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveURL(/login/)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[placeholder='Password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
})