import { AxiosInstance } from "axios";
import initAxios from "./initAxios";

import { API_URL } from "../const";

export class ApiService {
    protected fetch: AxiosInstance;
  
    constructor() {
      this.fetch = initAxios(API_URL);
    }
  }