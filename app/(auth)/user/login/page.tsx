import Link from 'next/link'
import React from 'react'
import MainPic from '@/app/component/general/MainPic';
import LoginForm from './loginForm';
import SocialAuth from '@/app/component/general/SocialAuth';




export default function Loginpage() {
  // async function create(formdata: FormData) {
  //   'use server'
  //   const result = await login(formdata);
  //   if(!!result.success)
  //   {
  //     console.log(result);
  //     redirect('/')
  //   }
  //   else
  //   {
  //     console.log(result.error);
  //   }
  // }



  return (
    <>

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
              Sign in
            </h1>
            <LoginForm />
            <SocialAuth />
            
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              <Link href='/user/register' className="text-xs text-[#7395AE]  hover:underline">Dont have an account? </Link>
            </p>
          </div>
        </div >

        <MainPic className='opacity-40' />

      </section>


    </>
  )
}
