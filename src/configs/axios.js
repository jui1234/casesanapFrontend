import axios from "axios";
import { backend_url } from "./index";

const instance = axios.create({ baseURL: backend_url });

instance.defaults.headers.post["Content-Type"] = "application/json";
// const token = localstorage.getItem('token'); if (token) { instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; }

instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

// import { backend_url } from './index';
// import React, { useEffect } from 'react';

// const instance = axios.create({ baseURL: backend_url });

// instance.defaults.headers.post['Content-Type'] = 'application/json';

// // Use useEffect to run client-side code
// useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
// }, []); // The empty dependency array ensures it runs after the component is mounted

// instance.setToken = (accessToken) => {
//     instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
// };

// export default axios;
