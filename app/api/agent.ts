import axios, { AxiosResponse } from "axios";
import { Login } from "../models/login";
import CookieConfig from "../lib/cookieconfig";
import { Profile } from "../models/profile";
import { Register } from "../models/register";
import { request } from "http";
import { Pet } from "../models/pet";
import { Kind } from "../models/kind";
import { Breed } from "../models/breed";
import { Color } from "../models/color";
import { AddPet } from "../models/addpet";

axios.defaults.baseURL = "https://petetco.maralamirkian.com/api/";

axios.interceptors.request.use(
  (config) => {
    const _cookieConfig = new CookieConfig();
    const cookie = _cookieConfig.getToken("jwt");
    //const commonStore = new CommonStore();  //localStorage.getItem('jwt');
    //commonStore.getToken();
    config.headers["Authorization"] = `Bearer ${cookie}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// const requests = {
//   get: <T>(url: string) =>
//     axios
//       .get<T, AxiosResponse<T, any>>(url)
//       .then(responseBody)
//       .catch((error) => {
//         if (error.response) {
//           return error.response.data;
//         }
//       }),
//   getbyvalue: <T>(url: string, value: string) =>
//     axios.get<T>(url + "?" + value).then(responseBody),
//   post: <T>(url: string, body: {}) =>
//     axios
//       .post<T, AxiosResponse<T, any>>(url, body)
//       .then(responseBody)
//       .catch((error) => {
//         if (error.response) {
//           return error.response.data;
//         }
//       }),
// };

const requests = {
  get: <T>(url: string) =>
    axios
      .get<T, AxiosResponse<T>>(url)
      .then(responseBody)
      .catch((error) => error.response?.data),

  getbyvalue: <T>(url: string, value: string) =>
    axios.get<T>(url + "?" + value).then(responseBody),

  post: <T>(url: string, body: object) =>
    axios
      .post<T, AxiosResponse<T>>(url, body)
      .then(responseBody)
      .catch((error) => error.response?.data),

  postForm: <T>(url: string, formData: FormData) =>
    axios
      .post<T, AxiosResponse<T>>(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(responseBody)
      .catch((error) => error.response?.data),
};

const Account = {
  login: (user: Login) => requests.post<Profile>("/login", user),
  register: (register: Register) =>
    requests.post<Profile>("/register", register),
  getProfile: () => requests.get<Profile>("/profile"),
};

const PetAction = {
  getAllPet: () => requests.get<Pet[]>("/pets"),
  getPet: (id: string) => requests.get<Pet>(`/pets/${id}`),
  addPet: (pet: AddPet) => {
    const formData = new FormData();

    Object.entries(pet).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          formData.append(key, value); // send file as-is
        } else {
          formData.append(key, String(value)); // convert all other types to string
        }
      }
    });
    return requests.postForm<Pet>("/pets", formData);
  },
};

const PetBaseInfo = {
  getAllPetKind: () => requests.get<Kind[]>("/kinds"),
  getAllPetColor: () => requests.get<Color[]>("/colors"),
  getAllPetBreed: (id: string) =>
    requests.get<Breed[]>(`/breeds?kind_id=${id}`),
};

const agent = {
  Account,
  PetAction,
  PetBaseInfo,
};

export default agent;
