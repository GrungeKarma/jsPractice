const puppeteer = require('puppeteer');
const fs = require('fs');

amazonImageScraper = (url) =>{
(async () => {
  let imageUrl = url ;
  let browser =  await puppeteer.launch({headless: false});
  let page = await browser.newPage();

  await page.goto(imageUrl);
  await page.waitForSelector('#landingImage');

  let element = await page.$('#landingImage');

  await element.screenshot({path: "amazon.png"});
  await browser.close();

})();
};

amazonImageScraper("https://www.amazon.com/ANYCUBIC-Mega-S-Extruder-Suspended-Filament/dp/B07J9QGP7S/ref=sr_1_1_sspa?dchild=1&keywords=3d+printer&qid=1621458828&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOFpNM0JHREtVSDMzJmVuY3J5cHRlZElkPUEwNjcwMTI1MVI3QkJaVkxKTlBCTCZlbmNyeXB0ZWRBZElkPUEwNjAzODQ2MVFWUVNaRFFZMDNZSiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=");
