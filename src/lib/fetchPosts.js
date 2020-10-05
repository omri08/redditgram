import fetch from "node-fetch";
import { getGifFromGfy } from "./scrapeGif";

export async function fetchPosts(subreddit, query) {
  let baseURL = `https://www.reddit.com/r/${subreddit}.json`;

  if (query) baseURL = baseURL.concat(query);

  try {
    let result = await fetch(baseURL);
    result = await result.json();

    const posts = parsePosts(result.data);

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

function parsePosts(data) {
  let posts = data.children;

  posts = posts
    .filter((post) => isImage(post.data.url))
    .map((post) => formatPost(post));
  return posts;
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

function formatPost(post) {
  return {
    type: "IMAGE",
    media: cleanUrl(post.data.url),
    thumbnail: post.data.thumbnail,
    title: post.data.title,
  };
}

function cleanUrl(url) {
  //Get original imgur gif
  url = url.replace("gifv", "gif");

  //Try to get original gfycat gif
  if (url.includes("gfycat") && !url.includes(".gif")) {
    let endUrl = url.split("/");
    endUrl = endUrl[endUrl.length - 1];
    return "https://zippy.gfycat.com/" + endUrl + ".gif";
  }

  return url;
}

fetchPosts();
