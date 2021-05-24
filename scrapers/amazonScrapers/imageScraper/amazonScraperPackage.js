const puppeteer = require('puppeteer');

let imageNameArr = [];

const rand1 = Math.random().toString(16).substr(2, 8);
imageNameArr.push({ id: 1, link: `<img src ="${rand1}">` });
//creates a random string to used as the image name and pushes it to an array

amazonImageScraper = (url) =>{
  (async () => {
    let imageUrl = url ;
    let path = `./scrapers/amazonScrapers/imageScraper/screenshots`;
    //assign a name to url and the path for saving images

    let browser =  await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    //launch puppeteer

    await page.goto(imageUrl), { waitUntil: 'networkidle2' };

    //sends puppeteer to the url and waits until everything is rendered

    await page.waitForSelector('#landingImage');
    let element1 = await page.$('#landingImage');
    await element1.screenshot({ path: `${path}/${rand1}.png` });
    //screenshot the image

    await browser.close();
    //closes puppeteer
})();
};

console.log(imageNameArr);

amazonImageScraper ("https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/?_encoding=UTF8&pd_rd_w=FIm5W&pf_rd_p=b503c46b-b228-4927-9672-d09029f4d186&pf_rd_r=VZ1QN5DMF39YG6XP3VFX&pd_rd_r=ec359f9e-21b0-4009-a4c5-5ba5965eacc8&pd_rd_wg=ZzY7R&ref_=pd_gw_trq_ed");
//calling scraper function

amazonNameScraper = (url) =>{
  (async () => {
    let nameUrl = url ;
    //assign url a name

    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    //launch puppeteer

    await page.goto(nameUrl), { waitUntil: 'networkidle2' };
    await page.waitForSelector('#productTitle');
    //send browser to url and waits for rendering and the selector

    let nameGen =await page.evaluate(() => {
      const nameRegex = /[^\s*].*[^\s*]/;
      //regex to remove the spaces in the html content

      let name = document.getElementById('productTitle').textContent;
      let cleanName = name.match(nameRegex);
      return cleanName;
    });
console.log(nameGen);
    // grabs name of the item

    await browser.close();
    //closes puppeteer
})();
};

amazonNameScraper("https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/?_encoding=UTF8&pd_rd_w=FIm5W&pf_rd_p=b503c46b-b228-4927-9672-d09029f4d186&pf_rd_r=VZ1QN5DMF39YG6XP3VFX&pd_rd_r=ec359f9e-21b0-4009-a4c5-5ba5965eacc8&pd_rd_wg=ZzY7R&ref_=pd_gw_trq_ed");

let amazonPriceScraper = (url)=>{
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

amazonPriceScraper('https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/?_encoding=UTF8&pd_rd_w=FIm5W&pf_rd_p=b503c46b-b228-4927-9672-d09029f4d186&pf_rd_r=VZ1QN5DMF39YG6XP3VFX&pd_rd_r=ec359f9e-21b0-4009-a4c5-5ba5965eacc8&pd_rd_wg=ZzY7R&ref_=pd_gw_trq_ed');
