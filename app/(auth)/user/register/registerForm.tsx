'use client'
import { register } from "@/app/action/apiAction";
import ErrorMessage from "@/app/component/general/ErrorMessage";
import MyInput from "@/app/component/general/MyInput";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function RegisterForm() {
    const[message,setMessage] = useState('');

    const formAction = async (formdata:FormData) =>{

        const result = await register(formdata);
        if(result.error)
            setMessage(result.message);
    }

    return (
        <form action={formAction}>
            <MyInput required label='Full Name' name='name' placeholder='Full Name' />
            <MyInput required label='Email' name='email' placeholder='Email' type='email' />
            <MyInput required label='Password' name='password' placeholder='Password' type='password' />
            <MyInput required label='Confirm Password' name='confirmPassword' placeholder='Confirm Password' type='password' />
            <ErrorMessage message={message} />
            <div className='flex mt-7 p-1'  >

            </div>
            <div className='lg:flex w-full p-1 sm:p-0 md:p-0 ' >
                <Button
                    size="2xs"
                    type='submit'
                    color='blue-gray'
                    className="w-full rounded border-blue-gray-300  text-white border bg-[#7395AE] p-2 " typeof='submit'  >
                    <span>Create Accout</span>
                </Button>
            </div>
        </form>

    )
}
