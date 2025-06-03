import { HTTP_STATUS } from "@/constants/errors";
import { ROUTES } from "@/constants/routes";
import { getAccessToken, removeAccessToken } from "@/utils/cookiesHelper";
import axios from "axios";
const defaultLocale = "vi";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // const { token } = useAuthStore();
    const token = getAccessToken();
    if (token) {
      // If token exists, set it in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // If error response status is 401 (Unauthorized), remove the access token and redirect to login
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
      removeAccessToken();
      const locale = window.location.pathname.split("/")[1] || defaultLocale;
      window.location.href = `/${locale}${ROUTES.LOGIN}`;
      return;
    }
    // Handle errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
