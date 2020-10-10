// eslint-disable-next-line no-undef
const chromium = require("chrome-aws-lambda");

export async function getGifFromGfy(url) {
  let result = null;
  let browser = null;
  console.log("here:", url);
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    await page.goto(url);
    result = await page.evaluate(() => {
      let elements = document.getElementsByTagName("source");
      for (let element of elements)
        if (element.type === "video/mp4" && !element.src.includes("mobile")) {
          return element.src;
        }
      return null;
    });
    console.log("result::::", result);
  } catch (error) {
    console.error(error);
    console.log("err:", error);
    return null;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return result;
}
