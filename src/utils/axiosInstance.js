import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.clane.com/api/v1/news/v1",
});

export default axiosInstance;