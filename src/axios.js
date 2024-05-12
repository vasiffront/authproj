import axios from "axios";
import { useAppStore } from "@/stores/AppStore";

axios.defaults.baseURL = import.meta.env.PROD
  ? "http://79.174.91.206:8080"
  : "http://localhost:8080";

axios.interceptors.request.use(
  async (config) => {
    console.log("request");
    const appStore = useAppStore();
    const token = appStore.$state.accessToken?.tokenValue;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    console.log("response");
    return response;
  },
  async function (error) {
    console.log(error);
    const appStore = useAppStore();
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await appStore.refresh();

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + appStore.$state.accessToken.tokenValue;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
