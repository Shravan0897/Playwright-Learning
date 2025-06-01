const { test, expect } = require('@playwright/test')

test("My First test", async function ({ page }) {
    expect("Shravan").toBe("Shravan")
})

test("My Second test", async function ({ page }) {
    expect("Tomar").toBe("Tomar")
})

test("My Third test", async function ({ page }) {
    expect(27).toBe(27)
})

test("My Fourth test", async function ({ page }) {
    expect("I work with Shuru Technologies").toContain("Shuru")
})

test("My Fifth test", async function ({ page }) {
    expect(100).toBeGreaterThanOrEqual(199)
})