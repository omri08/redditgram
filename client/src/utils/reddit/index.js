import axios from "axios";

const reddit = axios.create({
  baseURL: "https://www.reddit.com",
});

export async function searchSubs(sub) {
  try {
    const { data } = await reddit.get(`/subreddits/search.json?q=${sub}`);

    return data;
  } catch (error) {
    return null;
  }
}
