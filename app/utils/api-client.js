/* eslint-disable prefer-promise-reject-errors */

import axios from 'axios';

const baseUrl = `http://34.134.29.128:8081/v1/`;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = null /* Get your authentication token here */;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 204) {
            return Promise.resolve('Delete successfully');
        }
        return response.data.payload || response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Unauthorized, perform logout and redirect logic here

            // You may need to handle navigation differently in React Native
            // Example: navigation.navigate('Login');
            return Promise.reject({ message: 'Please re-authenticate.' });
        }
        return Promise.reject(error.response ? error.response.data : error);
    }
);

export { axiosInstance };
