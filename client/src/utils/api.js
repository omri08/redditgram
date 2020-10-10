import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export async function getPosts(dispatch, url) {
  dispatch({ type: "LOADING" });
  try {
    const res = await api.get(url);
    console.log(res);
    dispatch({ type: "COMPLETE", payload: res });
  } catch (error) {
    dispatch({ type: "ERROR" });
    console.log(error);
  }
}

export default api;
