import React from 'react';
import Image from 'next/image';
export default function Banner()
{
    return(
        // <div className='max-sm:hidden' >
        //     <div className='relative w-full h-[700px]'>

        //         <Image src="/assets/categoryimages/banner/banner.png" fill alt='cover' objectFit='contain' />
        //     </div>
        // </div>

    <div className="w-screen h-screen flex items-center justify-center bg-zinc-200">
        <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Full Screen Component</h1>
            <p className="mt-4">This component covers the entire viewport.</p>
        </div>
    </div>

    );    
} 