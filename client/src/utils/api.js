import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export async function getPosts(dispatch, url) {
  dispatch({ type: "LOADING" });
  try {
    const res = await api.get(url);
    dispatch({ type: "COMPLETE", payload: res.data });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
}

export default api;
