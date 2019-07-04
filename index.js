const puppeteer = require('puppeteer');

(async () =>{
    //Open the page vnexpress
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://vnexpress.net/');

    //run the scipt 
    const articles = await page.evaluate(() => {
        let titleLinks = document.querySelectorAll('h4.title_news > a');
        titleLinks = [...titleLinks];
        let articles = titleLinks.map(link => ({
            title: link.getAttribute('title'),
            url: link.getAttribute('href')
        }));
        return articles;
    });
    console.log(articles);
    await browser.close();
})();