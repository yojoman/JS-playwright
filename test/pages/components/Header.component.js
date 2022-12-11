class Header {
  constructor(page) {
    this.page = page;
    this.headerList = page.locator("//div[@id='menu']/ul/li");
  }
}

module.exports = Header;
