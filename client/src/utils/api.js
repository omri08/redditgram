import axios from "axios";

const api = axios.create({
  baseURL: "https://3cxux9as4i.execute-api.eu-west-1.amazonaws.com/dev",
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
