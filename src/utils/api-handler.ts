import axios from 'axios';

const baseURL = 'http://localhost:3000/api/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return error.response.data;
    }
    return Promise.reject(error);
  },
);

export const apiHandler = axiosInstance;
