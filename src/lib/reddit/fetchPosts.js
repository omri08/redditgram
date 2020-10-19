import fetch from "node-fetch";
import { parsePosts } from "./utils";
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
