'use client'
import { signOut } from '@/app/action/apiAction';
import React from 'react'

export default function SignOut() {
    const signOutTst = async () => {
        signOut();
        console.log("Finish.......");
    }
    return (
        <button onClick={signOutTst}>Sign Out</button>
    )
}
