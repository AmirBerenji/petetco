import axios, { AxiosResponse } from "axios";
import { Login } from "../models/login";
import CookieConfig from "../lib/cookieconfig";
import { Profile } from "../models/profile";




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
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    getbyvalue: <T>(url: string, value: string) => axios.get<T>(url + "?" + value).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  }


  const Account = {
    login: (user: Login) => requests.post<Profile>('/login', user),
  }

  const agent = {
    Account,
  }
  
  export default agent;