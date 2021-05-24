const puppeteer = require('puppeteer');


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

amazonNameScraper("https://www.amazon.com/BTF-LIGHTING-WS2812B-Heatsink-10mm3mm-WS2811/dp/B01DC0J3UM/?_encoding=UTF8&pd_rd_w=55CzD&pf_rd_p=2eed4166-2052-4602-96d1-514e72c433c6&pf_rd_r=0Z7K4RCWNQHCDZDJE8KX&pd_rd_r=427339a2-d055-489b-ad18-6c4d69af8391&pd_rd_wg=obkSn&ref_=pd_gw_crs_wish");
