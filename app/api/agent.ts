import axios, { AxiosResponse } from "axios";
import { Login } from "../models/login";
import CookieConfig from "../lib/cookieconfig";
import { Profile } from "../models/profile";
import { Register } from "../models/register";




axios.defaults.baseURL = "https://petetco.maralamirkian.com/api/";


axios.interceptors.request.use(
  (config) => {
    const _cookieConfig = new CookieConfig();
    const cookie = _cookieConfig.getToken('jwt');
    //const commonStore = new CommonStore();  //localStorage.getItem('jwt');
    //commonStore.getToken();
    config.headers['Authorization'] = `Bearer ${cookie}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T, AxiosResponse<T, any>>(url).then(responseBody).catch(error => {
    if (error.response) {
      return error.response.data
    }
  }),
  getbyvalue: <T>(url: string, value: string) => axios.get<T>(url + "?" + value).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T, AxiosResponse<T, any>>(url, body).then(responseBody).catch(error => {
    if (error.response) {
      return error.response.data
    }
  }),
}


const Account = {
  login: (user: Login) => requests.post<Profile>('/login', user),
  register: (register: Register) => requests.post<Profile>('/register', register),
  getProfile:()=>requests.get<Profile>('/profile')
}

const agent = {
  Account,
}

export default agent;