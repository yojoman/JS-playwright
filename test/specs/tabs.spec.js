const { test, expect } = require("@playwright/test");
const TabsPage = require("../pages/Tabs.page");

test.describe("Tabs page functionality", () => {
  test("Open Tabs page and verify title and heading", async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await expect(page).toHaveTitle(
      /Accordion and Tabs | QA Demo Testing Site - Global SQA/
    );
    await expect(tabsPage.pageHeading).toHaveText("Accordion And Tabs");
  });

  test("Open Section 2 and verify its text ", async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await tabsPage.openFrameSection("Section 2");
    await expect(tabsPage.sectionTwoText).toContainText(
      "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus."
    );
  });

  test("Open Section 4 and verify its text ", async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await tabsPage.openFrameSection("Section 4");
    await expect(tabsPage.sectionFourText).toContainText(
      "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada"
    );
  });

  test("Tabs page contains correct header menu elements", async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await expect(tabsPage.header.logo).toBeVisible();
    await expect(tabsPage.header.headerMenuList.first()).toBeVisible();
    await expect(tabsPage.header.headerMenuList).toHaveCount(5);
    await expect(tabsPage.header.headerMenuList).toContainText([
      "Home",
      "CheatSheets",
      "Free Ebooks",
      "Tester’s Hub",
      "Contact Us",
    ]);
  });

  test("Tabs page contains correct footer elements", async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await expect(tabsPage.footer.calendar).toBeVisible();
    await expect(tabsPage.footer.footerMenuList.first()).toBeVisible();
    await expect(tabsPage.footer.footerMenuList).toHaveCount(3);
    await expect(tabsPage.footer.footerMenuList).toContainText([
      "About Us",
      "Quick Menu",
      "Contact Info",
    ]);
  });
});
