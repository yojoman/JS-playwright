const { test, expect } = require("@playwright/test");
const MainPage = require("../pages/Main.page");

test.describe("Main page functionality", () => {
  test("Open Main page and verify title and heading", async ({ page }) => {
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
    await expect(mainPage.header.logo).toBeVisible();
    await expect(mainPage.header.logo).toHaveAttribute("alt", "GlobalSQA");
  });

  test("Main page contains correct header menu elements", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await expect(mainPage.header.headerMenuList.first()).toBeVisible();
    await expect(mainPage.header.headerMenuList).toHaveCount(5);
    await expect(mainPage.header.headerMenuList).toContainText([
      "Home",
      "CheatSheets",
      "Free Ebooks",
      "Tester’s Hub",
      "Contact Us",
    ]);
  });

  test("Main page contains correct footer elements", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await expect(mainPage.footer.calendar).toBeVisible();
    await expect(mainPage.footer.footerMenuList.first()).toBeVisible();
    await expect(mainPage.footer.footerMenuList).toHaveCount(3);
    await expect(mainPage.footer.footerMenuList).toContainText([
      "About Us",
      "Quick Menu",
      "Contact Info",
    ]);
  });
});
