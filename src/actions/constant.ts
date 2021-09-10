import axios from "axios";

const session = localStorage.getItem("session");
const token = session && JSON.parse(session).token;

export const APP_API = 'https://sofit-front-challenge.herokuapp.com';

export const api = axios.create({
    baseURL: APP_API,
    headers: { Authorization: `Bearer ${token}` },
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