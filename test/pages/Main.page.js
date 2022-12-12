const BasePage = require("./Base.page");
const Footer = require("./components/Footer.component");
const Header = require("./components/Header.component");

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = page.locator("//h2[@style='text-align: left;']");
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  async navigate() {
    await super.navigate("demo-site");
  }
}

module.exports = MainPage;
