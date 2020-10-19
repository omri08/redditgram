import commonMiddleware from "../lib/commonMiddleware";
import createError from "http-errors";
import { fetchPosts } from "../lib/reddit/fetchPosts";

async function getPosts(event) {
  const { subreddit } = event.pathParameters;
  const params = event.queryStringParameters;
  let query;
  if (params) {
    if (params.before) query = `?before=${params.before}`;
    else if (params.after) query = `?after=${params.after}`;
  }

  const posts = await fetchPosts(subreddit, query);

  if (posts === null)
    throw new createError.InternalServerError("Error fetching posts");

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
}

export const handler = commonMiddleware(getPosts);
