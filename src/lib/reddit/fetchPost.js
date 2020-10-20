import fetch from "node-fetch";
import { formatPost, formatReplies } from "./utils";

export async function fetchPost(id) {
  const baseURL = `https://www.reddit.com/comments/${id}/.json`;
  try {
    let result = await fetch(baseURL);
    result = await result.json();
    const mainPost = result[0].data.children[0].data;

    let post = await formatPost(result[0].data.children[0]);
    post = {
      ...post,
      sub: mainPost.subreddit,
      premalink: mainPost.premalink,
      ups: mainPost.ups,
      author: mainPost.author,
      replies: formatReplies(result[1]),
    };

    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
}
