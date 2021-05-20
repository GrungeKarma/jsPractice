const puppeteer = require('puppeteer');

let nameArr = [];

const rand1 = Math.random().toString(16).substr(2, 8);
const rand2 = Math.random().toString(16).substr(2, 8);
const rand3 = Math.random().toString(16).substr(2, 8);
//assign random values to the urls.

nameArr.push({ id: 1, link: `<img src ="${rand1}">` });
nameArr.push({ id: 2, link: `<img src ="${rand2}">` });
nameArr.push({ id: 3, link: `<img src ="${rand3}">` });

//push random values to name array for reference.

console.log(nameArr);

amazonImageScraper = (url1, url2, url3) =>{
(async () => {
  let imageUrl1 = url1 ;
  let imageUrl2 = url2 ;
  let imageUrl3 = url3 ;

  let path = `./scrapers/amazonScrapers/imageScraper/screenshots`;
  //set a path for images

  let browser =  await puppeteer.launch({headless: false});
  let page = await browser.newPage();
  //open puppeteer and wait for image to load

  await page.goto(imageUrl1);
  await page.waitForSelector('#landingImage');
  let element1 = await page.$('#landingImage');
  await element1.screenshot({ path: `${path}/${rand1}.png` });
  //screenshot first image

  await page.goto(imageUrl2);
  await page.waitForSelector('#landingImage');
  let element2 = await page.$('#landingImage');
  await element2.screenshot({ path: `${path}/${rand2}.png` });

  //screenshot second image

  await page.goto(imageUrl3);
  await page.waitForSelector('#landingImage');
  let element3 = await page.$('#landingImage');
  await element3.screenshot({ path: `${path}/${rand3}.png` });
  //screenshot third image

  await browser.close();
//close puppeteer
})();
};


amazonImageScraper ("https://www.amazon.com/TOMLOV-Microscope-50X-1300X-Magnification-Ultra-Precise/dp/B08MVKKSLY/?_encoding=UTF8&pd_rd_w=yqTTn&pf_rd_p=2eed4166-2052-4602-96d1-514e72c433c6&pf_rd_r=8E0WGYYVYE5017ECAJPG&pd_rd_r=03b5a7f9-3f43-4f72-b9c8-d3ec581b450c&pd_rd_wg=jBNiN&ref_=pd_gw_crs_wish","https://www.amazon.com/DripDrop-Dehydration-Electrolyte-Watermelon-Servings/dp/B07NR8FBMT/ref=sr_1_1_sspa?dchild=1&keywords=core&qid=1621489430&rdc=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSFNMSlkzOVdXM0xXJmVuY3J5cHRlZElkPUEwNDc3MjE1MjJWNzVCM01aTUtQOSZlbmNyeXB0ZWRBZElkPUEwMDM1NTc1NEY1NExGS1pTWEJCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==","https://www.amazon.com/gp/product/B07R3HWLWX?pf_rd_r=5CS16DN9EK809824YS5E&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=f2f076c8-f70f-443c-8081-436c70d72029&pd_rd_w=9mXhP&pd_rd_wg=uclUK&ref_=pd_gw_unk");


nameArr.forEach(element => {
  console.log(element.id);
  console.log(element.link);
});
