// THIRD-PARTY
import axios, { AxiosError } from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
const serviceToken: string = localStorage.getItem("serviceToken") || "";

const axiosServices = axios.create({
  baseURL: BASE_URL,
  headers: { "access-token": serviceToken },
});
// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    setTimeout(() => {
      if (
        error.response &&
        error.response.status === 401 &&
        window.location.pathname !== "/login"
      ) {
        window.location.href = "/login";
      }
    }, 500);
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosServices;

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "access-token": serviceToken },
});
