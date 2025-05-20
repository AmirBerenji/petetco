'use client'

import { login } from '@/app/action/apiAction';
import ErrorMessage from '@/app/component/general/ErrorMessage';
import LoadingPage from '@/app/component/general/Loading';
import MyInput from '@/app/component/general/MyInput';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginForm() {
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result.error) {
      setMessage(result.message);
    } else {
      // ✅ Redirect or show success as needed
      // e.g., router.push('/dashboard')
    }

    setLoading(false);
  };

  return (
    <>
        <form onSubmit={handleSubmit}>

            {isLoading ? <LoadingPage /> : <></>}

          <MyInput label="Email" name="userName" placeholder="Email" />
          <MyInput label="Password" name="password" placeholder="Password" type="password" />
          <ErrorMessage message={message} />
          
          <div className="flex mt-7 p-1">
            <Link href="/user/forgotpassword" className="text-xs text-[#7395AE] hover:underline">
              Forget Password?
            </Link>
          </div>
          
          <div className="lg:flex w-full p-1 sm:p-0 md:p-0">
            <Button
              size="2xs"
              type="submit"
              color="blue-gray"
              className="w-full rounded border-blue-gray-300 text-white border bg-[#7395AE] p-2"
            >
              <span>Login</span>
            </Button>
          </div>
        </form>
    </>
  );
}
