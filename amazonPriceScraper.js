const puppeteer = require('puppeteer');
let amazonPiceScraper = (url)=>{
  (async () => {
    let browser = await puppeteer.launch({ headless: false, });
    let page = await browser.newPage();
    //launches puppeteer and opens a new page

    await page.goto(url);
    //go to url

    const priceSelectors = [
      '#priceblock_ourprice',
      '#priceblock_dealprice' /* more here if you find more selectors */
    ];
    //define price selectors

    await page.waitForFunction((priceSelectors) =>
      document.querySelectorAll(priceSelectors).length,
      {},
      priceSelectors // pass priceSelectors to wairForFunction
    );

    const pricer = await page.evaluate((priceSelectors) => {
      const priceRegex = /^\D\d+(\.\d+)?$/;
      //define regex for testing

      const asSingleSelector = priceSelectors.join(',');
      const priceElements = document.querySelectorAll(asSingleSelector);
      let price;
      // combines the price selectors and selects them

      priceElements.forEach((item) => {
        if (item && // item is not null
          item.innerHTML && // innerHTML exists
          priceRegex.test(item.innerHTML)) { // make sure string is a price
          price = item.innerHTML;
        }
      });
      return price;
    }, priceSelectors);
    // pass priceSelectors to evaluate

    console.log(pricer);

    await browser.close();

})();
};

amazonPiceScraper('https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/?_encoding=UTF8&pd_rd_w=FIm5W&pf_rd_p=b503c46b-b228-4927-9672-d09029f4d186&pf_rd_r=VZ1QN5DMF39YG6XP3VFX&pd_rd_r=ec359f9e-21b0-4009-a4c5-5ba5965eacc8&pd_rd_wg=ZzY7R&ref_=pd_gw_trq_ed');

