class Header {
  constructor(page) {
    this.page = page;
    this.logo = page.locator("//img[contains(@class,'lazyloaded')]");
    this.headerMenuList = page.locator("//div[@id='menu']/ul/li");
  }
}

module.exports = Header;
