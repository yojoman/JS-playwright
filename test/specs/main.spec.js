const { test, expect } = require("@playwright/test");
const MainPage = require("../pages/Main.page");

test.describe("Main page functionality", () => {
  test("Open main page and verify title and heading", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await expect(page).toHaveTitle(
      /Testing Demo Site | Practice Website For Automation - Global SQA/
    );
    await expect(mainPage.pageHeading).toHaveText(
      "Automate Selenium/Protractor Automation  Scripts"
    );
  });

  test("Logo is visible and have alt title", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await expect(mainPage.logo).toBeVisible();
    await expect(mainPage.logo).toHaveAttribute("alt", "GlobalSQA");
  });

  test("Header contains correct elements", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await expect(mainPage.header.headerList).toHaveCount(5);
    await expect(mainPage.header.headerList).toContainText([
      "Home",
      "CheatSheets",
      "Free Ebooks",
      "Tester’s Hub",
      "Contact Us",
    ]);
  });
});
