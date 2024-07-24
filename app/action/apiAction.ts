'use server'


import { redirect } from "next/navigation";
import agent from "../api/agent"
import Validation from "../api/validation";
import CookieConfig from "../lib/cookieconfig";
import { Login } from "../models/login";

export async function login(formdata: FormData) {
        const login: Login = {
            email: (formdata.get('userName') as string),
            password: (formdata.get('password') as string)
        };
        
        if((typeof login.email=='undefined' && !login.email) 
            || (typeof login.password=='undefined' && !login.password) )
        {
            return { message: "Please fill all data!!!",error: true }    
        }

        const result = new Validation().validateEmail(login.email);

        if (result) {
            const req = await agent.Account.login(login);
            if (!!req.message) {
                return { message: req.message,error: true }
            }
            new CookieConfig().setToken('jwt',req.data.token);
            redirect('/');
            return { message: "",error:false }
        }
        return { message: "Your email format is not true",error: true }
}