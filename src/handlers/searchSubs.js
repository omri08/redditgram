import commonMiddleware from "../lib/commonMiddleware";
import createError from "http-errors";
import fetch from "node-fetch";

async function searchSubs(event) {
  const { sub } = event.pathParameters;

  let res = await fetch(
    `https://www.reddit.com/subreddits/search.json?q=${sub}`
  );

  res = await res.json();

  if (res === null)
    throw new createError.InternalServerError("Error fetching post");

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
}

export const handler = commonMiddleware(searchSubs);
