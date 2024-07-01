import axios, { AxiosInstance } from "axios";

const initAxios = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL });

  const onReject = (error: unknown) => {
    console.error("intercept error", "error.response", error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, onReject);

  return instance;
};

export default initAxios;
