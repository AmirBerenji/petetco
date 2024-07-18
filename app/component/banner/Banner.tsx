import React from 'react';
import Image from 'next/image';
export default function Banner()
{
    return(
        <div className='max-sm:hidden' >
            <div className='relative w-full h-[700px]'>

                <Image src="/assets/categoryimages/banner/banner.png" fill alt='cover' objectFit='contain' />
            </div>
        </div>
    );    
} 