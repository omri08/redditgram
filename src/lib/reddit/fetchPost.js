import fetch from "node-fetch";
import { formatPost } from "./utils";

export async function fetchPost(id) {
  const baseURL = `https://www.reddit.com/comments/${id}/.json`;
  try {
    let result = await fetch(baseURL);
    result = await result.json();

    const post = await formatPost(result[0].data.children[0]);
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
}
