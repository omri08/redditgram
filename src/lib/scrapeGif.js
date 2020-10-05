import puppeteer from "puppeteer";

export async function getGifFromGfy(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://gfycat.com/tightwarlikefrillneckedlizard");

  const texts = await page.evaluate(() => {
    let elements = document.getElementsByTagName("source");
    for (let element of elements)
      if (element.type === "video/mp4" && !element.src.includes("mobile")) {
        return element.src;
      }
    return null;
  });
}
