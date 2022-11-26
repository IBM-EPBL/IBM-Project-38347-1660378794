import { test, expect } from "@playwright/test";

test("should works", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("should contain", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.locator("h1")).toContainText("Manage Your Inventory");
});



test('should navigate to login model', async ({ page }) => {
  
    await page.goto('http://localhost:3000/')
 
    await page.click('text=Login')

  })


  test('should navigate to Register model', async ({ page }) => {
  
    await page.goto('http://localhost:3000/')
 
    await page.click('text=Login')

    await page.click('text=Register')

  })
