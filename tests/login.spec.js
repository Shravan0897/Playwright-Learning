const { test, expect } = require('@playwright/test') // Import Playwright test and expect functions

test.use({ viewport: { width: 375, height: 600 } }) // Set the viewport size to simulate a mobile device

test("Verify Login", async function ({ page }) { // Define a test case named "Verify Login"
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Navigate to the login page
    console.log(await page.viewportSize().width) // Log the current viewport width
    console.log(await page.viewportSize().height) // Log the current viewport height
    await expect(page).toHaveURL(/login/) // Assert that the URL contains 'login'
    await page.getByPlaceholder("Username").fill("Admin") // Fill the username field with 'Admin'
    await page.locator("input[placeholder='Password']").fill("admin123") // Fill the password field with 'admin123'
    await page.locator("button[type='submit']").click() // Click the login button
    await expect(page).toHaveURL(/dashboard/) // Assert that the URL contains 'dashboard' after login
    await page.getByAltText("profile picture").first().click() // Click on the profile picture to open the menu
    await page.getByText("Logout").click() // Click the 'Logout' option
    await expect(page).toHaveURL(/login/) // Assert that the URL contains 'login' after logout
})