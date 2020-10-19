import middy from "@middy/core";
import httpErrorHanlder from "@middy/http-error-handler";
import createError from "http-errors";
import cors from "@middy/http-cors";
import { fetchPost } from "../lib/fetchFromReddit";

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

export const handler = middy(getPost).use([httpErrorHanlder(), cors()]);
