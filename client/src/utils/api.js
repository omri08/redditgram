import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export async function apiGet(url, params) {
  try {
    let res;
    if (params) res = await api.get(url, { params: { ...params } });
    else res = await api.get(url);
    return res;
  } catch (error) {
    return null;
  }
}
export default api;
