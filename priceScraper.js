const puppeteer = require('puppeteer');
let amazonPiceScraper = (url)=>{
  (async () => {
    let browser = await puppeteer.launch({ headless: false, });
    let page = await browser.newPage();
    await page.goto(url);

    const priceSelectors = [
      '#priceblock_ourprice',
      '#priceblock_dealprice' /* more here if you find more selectors */
    ];

    await page.waitForFunction((priceSelectors) =>
      document.querySelectorAll(priceSelectors).length,
      {},
      priceSelectors // pass priceSelectors to wairForFunction
    )
    const pricer = await page.evaluate((priceSelectors) => {
      const priceRegex = /^\D\d+(\.\d+)?$/;
      const asSingleSelector = priceSelectors.join(',');
      const priceElements = document.querySelectorAll(asSingleSelector);
      let price;
      priceElements.forEach((item) => {
        if (item && // item is not null
          item.innerHTML && // innerHTML exists
          priceRegex.test(item.innerHTML)) { // make sure string is a price
          price = item.innerHTML;
        }
      });
      return price;
    }, priceSelectors); // pass priceSelectors to evaluate

    console.log(pricer);

    await browser.close();

})();
};

amazonPiceScraper('https://www.amazon.com/ELEGOO-Board-ATmega328P-ATMEGA16U2-Compliant/dp/B01EWOE0UU/ref=sxts_sxwds-bia-wc-rsf-lq2a1_0?cv_ct_cx=arduino&dchild=1&keywords=arduino&pd_rd_i=B01EWOE0UU&pd_rd_r=581f51ea-847c-4e90-b372-952233f7f937&pd_rd_w=C6ICS&pd_rd_wg=T1j1P&pf_rd_p=26b0e770-de1c-4342-bf97-c57fd874dbaf&pf_rd_r=YQ2W9YKZC1MB4HZ0V0N0&psc=1&qid=1621701556&sr=1-1-49946e88-733b-44df-869b-c05699555c56');
