import MainPic from '@/app/component/general/MainPic'
import MyInput from '@/app/component/general/MyInput';
import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function Registerpage() {
    async function create(formData: FormData) {
        'use server';

        console.log(formData);

        // const password = (formData.get('password') as string) || '';
        // const confirmPassword = (formData.get('confirmPassword') as string) || '';
        // const email = (formData.get('email') as string) || '';
        // const firstName = (formData.get('firstName') as string) || '';
        // const lastName = (formData.get('lastName') as string) || '';
        // if (password != confirmPassword) {
        //     console.log('Password is not match!');
        //     return null
        // }
    }
    return (
        <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-50">
                <div className="w-full m-auto bg-white rounded-md shadow-xl lg:max-w-xl p-6   ">
                    <Link href="/" className="flex items-center mb-6   ">
                        <img
                            className="h-10 w-10 m-auto -mb-5"
                            src="/assets/logo.png"
                            alt="Pet Managment"
                        />

                    </Link>
                    <h1 className="text-3xl font-semibold text-center text-[#7395AE] uppercase">
                        Sign up
                    </h1>
                    <form action={create}>
                        <MyInput required label='First Name' name='firstName' placeholder='First Name' />
                        <MyInput required label='Last Name' name='lastName' placeholder='Last Name' />
                        <MyInput required label='Email' name='email' placeholder='Email' type='email' />
                        <MyInput required label='Password' name='password' placeholder='Password' type='password' />
                        <MyInput required label='Confirm Password' name='confirmPassword' placeholder='Confirm Password' type='password' />
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

                    <div className='mt-2'>
                        <p className="mt-5 text-xs font-light text-center text-gray-700">
                            <Link href='/user/login' className="text-xs text-[#7395AE]   hover:underline">I have an account! </Link>
                        </p>
                    </div>
                </div>
            </div >


            <MainPic className='opacity-40' />
        </section>
    )
}
