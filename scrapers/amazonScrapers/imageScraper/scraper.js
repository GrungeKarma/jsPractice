const puppeteer = require('puppeteer');
const fs = require('fs');
const { delay, async } = require('q');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');

const rand = Math.random().toString(16).substr(2, 8);

amazonImageScraper = (url) =>{
(async () => {
  let imageUrl = url ;
  console.log(imageUrl);
  let browser =  await puppeteer.launch({headless: false});
  let page = await browser.newPage();

  await page.goto(imageUrl);
  await page.waitForSelector('#landingImage');

  let element = await page.$('#landingImage');
  let path = `./scrapers/amazonScrapers/imageScraper/screenshots`;


  await element.screenshot({ path: `${path}/${rand}.png` });



  await browser.close();

})();
};


let imageArr = ["https://www.amazon.com/TOMLOV-Microscope-50X-1300X-Magnification-Ultra-Precise/dp/B08MVKKSLY/?_encoding=UTF8&pd_rd_w=yqTTn&pf_rd_p=2eed4166-2052-4602-96d1-514e72c433c6&pf_rd_r=8E0WGYYVYE5017ECAJPG&pd_rd_r=03b5a7f9-3f43-4f72-b9c8-d3ec581b450c&pd_rd_wg=jBNiN&ref_=pd_gw_crs_wish","https://www.amazon.com/DripDrop-Dehydration-Electrolyte-Watermelon-Servings/dp/B07NR8FBMT/ref=sr_1_1_sspa?dchild=1&keywords=core&qid=1621489430&rdc=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSFNMSlkzOVdXM0xXJmVuY3J5cHRlZElkPUEwNDc3MjE1MjJWNzVCM01aTUtQOSZlbmNyeXB0ZWRBZElkPUEwMDM1NTc1NEY1NExGS1pTWEJCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==","https://www.amazon.com/DripDrop-Dehydration-Electrolyte-Watermelon-Servings/dp/B07NR8FBMT/ref=sr_1_1_sspa?dchild=1&keywords=core&qid=1621489430&rdc=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSFNMSlkzOVdXM0xXJmVuY3J5cHRlZElkPUEwNDc3MjE1MjJWNzVCM01aTUtQOSZlbmNyeXB0ZWRBZElkPUEwMDM1NTc1NEY1NExGS1pTWEJCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="];

 imageArr.forEach (element => {
  amazonImageScraper(element);


});

