// Axios
import axios from "axios";
import config from '../config/index';
import { authService, } from "./auth";

// Configuring root url
export const rootURL = config.proxyApiURL;

// configuring axios on initial load with the authorization token from localstorage it exists
export const instance = axios.create({
    baseURL: rootURL,
    headers: {
        accept: "*/*",
    },
});

instance.interceptors.request.use((configuration) => {
    // Check if the token exists in cookies
    const token = authService.getToken();

    if (token) {
        configuration.headers.Authorization = `Bearer ${token}`;
    }

    // configuration.headers.set("x-api-key", crypto?.encryptKey?.(config.xApiKey));

    return configuration;
});

export default instance;