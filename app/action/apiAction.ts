"use server";
import { redirect } from "next/navigation";
import agent from "../api/agent";
import Validation from "../api/validation";
import CookieConfig from "../lib/cookieconfig";
import { Login } from "../models/login";
import { Register } from "../models/register";
import { Pet } from "../models/pet";
import { AddPet } from "../models/addpet";

export async function login(formdata: FormData) {
  const login: Login = {
    email: formdata.get("userName") as string,
    password: formdata.get("password") as string,
  };

  if (
    (typeof login.email == "undefined" && !login.email) ||
    (typeof login.password == "undefined" && !login.password)
  ) {
    return { message: "Please fill all data!!!", error: true };
  }

  const result = new Validation().validateEmail(login.email);

  if (result) {
    const req = await agent.Account.login(login);
    if (!!req.message) {
      return { message: req.message, error: true };
    }
    new CookieConfig().setToken("jwt", req.data.token);
    redirect("/");
    return { message: "", error: false };
  }
  return { message: "Your email format is not true", error: true };
}

export async function register(formdata: FormData) {
  const register: Register = {
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
    password_confirmation: formdata.get("confirmPassword") as string,
    name: formdata.get("name") as string,
  };

  if (
    (typeof register.email == "undefined" && !register.email) ||
    (typeof register.password == "undefined" && !register.password) ||
    (typeof register.password_confirmation == "undefined" &&
      !register.password_confirmation) ||
    (typeof register.name == "undefined" && !register.name)
  ) {
    return { message: "Please fill all data!!!", error: true };
  }

  if (register.password != register.password_confirmation) {
    return {
      message: "Password and Confirn Password is not same!!!",
      error: true,
    };
  }

  const result = new Validation().validateEmail(register.email);

  if (result) {
    const req = await agent.Account.register(register);

    if (!!req.message) {
      return { message: req.message, error: true };
    }
    new CookieConfig().setToken("jwt", req.data.token);
    redirect("/");
  }
  return { message: "Your email format is not true", error: true };
}

export async function getProfile() {
  const req = await agent.Account.getProfile();
  return req?.data;
}

export async function signOut() {
  new CookieConfig().deleteCookie("jwt");
}

export async function getAllPet(): Promise<Pet[]> {
  const req = await agent.PetAction.getAllPet();
  return req.data;
}

export async function getPet(id: string) {
  const req = await agent.PetAction.getPet(id);
  return req.data;
}

export async function addPet(pet: AddPet) {
  const req = await agent.PetAction.addPet(pet);
  return req.data;
}

export async function getAllPetKind() {
  const req = await agent.PetBaseInfo.getAllPetKind();
  return req.data;
}

export async function getAllPetBreed(id: string) {
  const req = await agent.PetBaseInfo.getAllPetBreed(id);
  return req.data;
}

export async function getAllColor() {
  const req = await agent.PetBaseInfo.getAllPetColor();
  return req.data;
}
