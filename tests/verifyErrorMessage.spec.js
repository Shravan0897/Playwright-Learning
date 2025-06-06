const { test, expect } = require('@playwright/test')


test("Verify error message", async function ({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("Admin@123456")
    await page.locator("//button[@type='submit']").click()
    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("error message is: " + errorMessage)
    await expect(errorMessage).toBe("Invalid credentials")
})