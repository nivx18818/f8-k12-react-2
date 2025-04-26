import axios from "axios";

let isRefreshing = false;
let failedQueue = [];

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const request = async (method, url, data, config) => {
  try {
    const res = await httpRequest.request({ method, url, data, ...config });
    return res.data;
  } catch (error) {
    console.error(error);
    return error.response?.data;
  }
};

export const get = (url, config) => {
  return request("GET", url, null, config);
};

export const post = (url, data, config) => {
  return request("POST", url, data, config);
};

export const put = (url, data, config) => {
  return request("PUT", url, data, config);
};

export const patch = (url, data, config) => {
  return request("PATCH", url, data, config);
};

export const remove = (url, data, config) => {
  return request("DELETE", url, data, config);
};

export const setToken = (token, refreshToken) => {
  localStorage.setItem("token", token);
  localStorage.setItem("refresh_token", refreshToken);
};

const deleteTokens = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};

httpRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => error
);

httpRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refresh_token");
    const shouldRenewToken = error.response?.status === 401 && refreshToken;

    if (!shouldRenewToken) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        failedQueue.push(() => resolve(httpRequest(originalRequest)));
      });
    }

    isRefreshing = true;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
        {
          refresh_token: refreshToken,
        }
      );

      const data = res.data.data;
      setToken(data.access_token, data.refresh_token);

      failedQueue.forEach((listener) => listener());

      return httpRequest(originalRequest);
    } catch (error) {
      console.error(error);
      deleteTokens();
      return Promise.reject(error);
    } finally {
      isRefreshing = false;
      failedQueue = [];
    }
  }
);

export default {
  get,
  post,
  put,
  patch,
  remove,
  setToken,
};
