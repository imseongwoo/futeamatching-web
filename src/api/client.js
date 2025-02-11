import axios from "axios";

export const client = axios.create({
  baseURL: 'https://www.futeamatching.com/api/v1',
  headers: {
    "Access-Control-Allow-Origin": "*", // CORS
  },
});

export const client2 = axios.create({
  baseURL: 'https://www.futeamatching.com/api/v2',
  headers: {
    "Access-Control-Allow-Origin": "*", // CORS
  },
  withCredentials: true
});

client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client2.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
