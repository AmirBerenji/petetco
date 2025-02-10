'use client'
import { signOut } from '@/app/action/apiAction';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SignOut() {
    const router = useRouter();
    const signOutTst = async () => {
        await signOut();
        router.push("/");
    }
    return (
        <button onClick={signOutTst}>Sign Out</button>
    )
}
