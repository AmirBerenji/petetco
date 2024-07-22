import React from 'react';
import Image from 'next/image';
export default function Banner()
{
    return(
        <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
        <Image src="/assets/categoryimages/banner/circelPink.png" width="560" height="560" alt="hero 1" className='absolute top-0 left-32' />
        <Image src="/assets/categoryimages/banner/circulePurpel.png" width="800" height="800" alt="hero 1" className="z-0 absolute -bottom-14 lg:right-56 right-2 " />
        <Image src="/assets/categoryimages/banner/dogBanner.png" width="744" height="900" alt="hero 1" className=" z-10 absolute -bottom-16 lg:right-56 right-2 " />
      </section>
    );    
} 