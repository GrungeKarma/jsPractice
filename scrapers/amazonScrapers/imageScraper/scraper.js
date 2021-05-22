const puppeteer = require('puppeteer');

let nameArr = [];
const rand1 = Math.random().toString(16).substr(2, 8);
const rand2 = Math.random().toString(16).substr(2, 8);
nameArr.push({ id: 1, link: `<img src ="${rand1}">` });
nameArr.push({ id: 1, link: `<img src ="${rand2}">` });
//creates a random string to used as the image name and pushes it to an array

amazonScraper = (url) =>{
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
    await page.waitForTimeout(5000);
    let nameGen =await page.evaluate(() => {
      let name = document.getElementById('productTitle').textContent;
      return name;
    });
    // grabs name of the item

    ////Broken: attempts to grab item price

    console.log(nameGen);


    await browser.close();
    //closes puppeteer
})();
};



(async () => {
  let browser = await puppeteer.launch({ headless: false, });
  let page = await browser.newPage();
  await page.goto('https://www.amazon.com/Insect-Lore-Butterfly-Growing-Kit/dp/B00000ISC5?ref_=Oct_DLandingS_D_a46a25b3_60&smid=ATVPDKIKX0DER');

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


amazonScraper ("https://www.amazon.com/TOMLOV-Microscope-50X-1300X-Magnification-Ultra-Precise/dp/B08MVKKSLY/?_encoding=UTF8&pd_rd_w=yqTTn&pf_rd_p=2eed4166-2052-4602-96d1-514e72c433c6&pf_rd_r=8E0WGYYVYE5017ECAJPG&pd_rd_r=03b5a7f9-3f43-4f72-b9c8-d3ec581b450c&pd_rd_wg=jBNiN&ref_=pd_gw_crs_wish");
//calling scraper function

amazonPiceScraper('https://www.amazon.com/TOMLOV-Microscope-50X-1300X-Magnification-Ultra-Precise/dp/B08MVKKSLY/?_encoding=UTF8&pd_rd_w=yqTTn&pf_rd_p=2eed4166-2052-4602-96d1-514e72c433c6&pf_rd_r=8E0WGYYVYE5017ECAJPG&pd_rd_r=03b5a7f9-3f43-4f72-b9c8-d3ec581b450c&pd_rd_wg=jBNiN&ref_=pd_gw_crs_wish');
