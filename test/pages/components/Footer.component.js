class Footer {
  constructor(page) {
    this.page = page;
    this.footerMenuList = page.locator("//div[@class='row']/div/h3");
    this.calendar = page.locator("//div[@id='calendar_wrap']");
  }
}

module.exports = Footer;
