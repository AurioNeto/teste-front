import axios from "axios";

export const APP_API = 'https://sofit-front-challenge.herokuapp.com';

export const api = axios.create({
    baseURL: APP_API
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    try {
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    } catch (err) {
        return err
    }
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.clear();
            (window as any).location = "/";
        }
        return Promise.reject(error);
    }
);

export default api;