const BasePage = require("./Base.page");
const Header = require("./components/Header.component");

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = page.locator("//h2[@style='text-align: left;']");
    this.logo = page.locator("//img[contains(@class,'lazyloaded')]");
    this.header = new Header(page);
  }

  async navigate() {
    await super.navigate("demo-site");
  }
}

module.exports = MainPage;
