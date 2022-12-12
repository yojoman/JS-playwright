const BasePage = require("./Base.page");
const Footer = require("./components/Footer.component");
const Header = require("./components/Header.component");

class TabsPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = page.locator("//h1");
    this.frame = page.frameLocator("//iframe[@class='demo-frame lazyloaded']");
    this.sectionTwoText = page
      .frameLocator("//iframe[@class='demo-frame lazyloaded']")
      .locator("//div[@id='ui-id-4']/p");
    this.sectionFourText = page
      .frameLocator("//iframe[@class='demo-frame lazyloaded']")
      .locator("//div[@id='ui-id-8']/p")
      .first();
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  async navigate() {
    await super.navigate("demo-site/accordion-and-tabs");
  }

  async openFrameSection(section) {
    await this.frame.getByRole("tab", { name: section }).click();
  }
}

module.exports = TabsPage;
