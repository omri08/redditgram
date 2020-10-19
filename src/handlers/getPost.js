import commonMiddleware from "../lib/commonMiddleware";
import createError from "http-errors";
import { fetchPost } from "../lib/reddit/fetchPost";

async function getPost(event) {
  const { id } = event.pathParameters;

  const post = await fetchPost(id);

  if (post === null)
    throw new createError.InternalServerError("Error fetching post");

  return {
    statusCode: 200,
    body: JSON.stringify(post),
  };
}

export const handler = commonMiddleware(getPost);
