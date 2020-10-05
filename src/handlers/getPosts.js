import middy from "@middy/core";
import httpErrorHanlder from "@middy/http-error-handler";
import createError from "http-errors";
import { fetchPosts } from "../lib/fetchPosts";

async function getPosts(event, context) {
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

export const handler = middy(getPosts).use(httpErrorHanlder());
