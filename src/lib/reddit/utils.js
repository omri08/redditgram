import { getGifFromGfy } from "./scrapeGif";

export function parsePosts(data) {
  let posts = data.children;

  const res = Promise.all(
    posts
      .filter((post) => isValid(post.data.url))
      .map((post) => formatPost(post))
  );

  return res;
}

export function isValid(url) {
  if (isImage(url) || url.includes("gfycat") || url.includes(".gif")) {
    return true;
  }
  return false;
}

export function isImage(url) {
  if (url.includes(".jpg") || url.includes(".png") || url.includes(".jpeg")) {
    return true;
  }
  return false;
}
export function checkType(url) {
  if ((url.includes("imgur") || url.includes("gfycat")) && !isImage(url))
    return "VIDEO";
  else return "IMAGE";
}

export async function formatPost(post) {
  return {
    id: post.data.id,
    type: checkType(post.data.url),
    media: await cleanUrl(post.data.url),
    thumbnail: post.data.thumbnail,
    title: post.data.title,
  };
}

export async function cleanUrl(url) {
  if (checkType(url) === "VIDEO") {
    let res;
    //Get original imgur gif
    if (url.includes("imgur")) res = url.replace(/gifv|gif/, "mp4");
    //Try to get original gfycat gif
    else if (url.includes("gfycat")) {
      res = getGifFromGfy(url);
    } else res = url.replace("gifv", "gif");
    return res;
  } else return url;
}
