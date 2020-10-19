import fetch from "node-fetch";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export async function getGifFromGfy(url) {
  const html = await fetch(url);
  const txt = await html.text();
  const doc = new JSDOM(txt);
  const elements = doc.window.document.getElementsByTagName("source");

  for (let element of elements) {
    if (element.type === "video/mp4" && !element.src.includes("mobile"))
      return element.src;
  }
  return null;
}
