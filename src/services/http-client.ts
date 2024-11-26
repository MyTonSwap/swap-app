import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL_API);
export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
});
