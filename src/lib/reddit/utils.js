import { getGifFromGfy } from "./scrapeGif";

export async function parsePosts(data) {
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

export function formatReplies(replies) {
  const arr = [];

  for (let i = 0; i < replies.data.children.length; i++) {
    const mainReplay = replies.data.children[i].data;
    console.log(mainReplay);
    const formatted = {
      ups: mainReplay.ups,
      id: mainReplay.id,
      author: mainReplay.author,
      body: mainReplay.body,
    };
    arr.push(formatted);
  }
  return arr;
}

// function hasReplies(reply) {
//   if (reply) {
//     if (Object.keys(reply).length !== 0) {
//       return true;
//     } else return false;
//   } else return false;
// }
