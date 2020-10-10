import fetch from "node-fetch";
import { getGifFromGfy } from "./scrapeGif";

export async function fetchPosts(subreddit, query) {
  let baseURL = `https://www.reddit.com/r/${subreddit}.json`;

  if (query) baseURL = baseURL.concat(query);

  console.log(baseURL);
  try {
    let result = await fetch(baseURL);
    result = await result.json();

    const posts = await parsePosts(result.data);

    return {
      posts,
      before: result.data.before,
      after: result.data.after,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function parsePosts(data) {
  let posts = data.children;
  const res = [];

  for (let i = 0; i < posts.length; i++)
    if (isImage(posts[i].data.url)) res.push(posts[i]);

  for (let i = 0; i < res.length; i++) res[i] = await formatPost(res[i]);

  return res;
}

function isImage(url) {
  if (
    url.includes(".jpg") ||
    url.includes(".gif") ||
    url.includes(".png") ||
    url.includes(".jpeg") ||
    url.includes("gfycat")
  ) {
    return true;
  }
  return false;
}

async function formatPost(post) {
  return {
    type: "IMAGE",
    media: await cleanUrl(post.data.url),
    thumbnail: post.data.thumbnail,
    title: post.data.title,
  };
}

async function cleanUrl(url) {
  //Get original imgur gif
  let res = url.replace("gifv", "gif");

  //Try to get original gfycat gif
  if (res.includes("gfycat") && !res.includes(".gif")) {
    res = await getGifFromGfy(res);
  }

  return res;
}
