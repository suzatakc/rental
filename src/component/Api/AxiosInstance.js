import axios from "axios";

//set your dev url here so that you dont have to change them in production every time
export const domain = "http://localhost:9090";

const instance = axios.create({
  baseURL: domain + "/api/",
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
