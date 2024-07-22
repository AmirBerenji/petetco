'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

interface Props {
    imageSrc: string;
    link: string;
    title: string;
    desc: string;
    buttonText: string;
}
// https://tailwind-elements.com/docs/standard/components/cards/#!
export default function FirstPageCard(prop: Props) {
    const [isLoading, setLoading] = useState(true);
    return (


        <div
            className="block rounded-lg h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="overflow-hidden bg-cover bg-no-repeat">
                <Image
                    src={`${prop.imageSrc}?format=webp`}
                    alt='image'
                    width='1500'
                    height='100'
                    priority
                    className={`
                            object-cover
                            group-hover:opacity-75
                            duration-700
                            ease-in-out
                            rounded-t-lg
                            ${isLoading ? 'rounded-t-lg grayscale blur-xl scale-150' : 'rounded-t-lg grayscale-0 blur-0 scale-100'}
                            `}
                    sizes='(max-width:700px) 100vw, (max-width: 1200px) 50vw, 25vw'
                    onLoadingComplete={() => setLoading(false)}
                />
            
            </div>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium text-[#5D5C61] leading-tight  dark:text-neutral-50">
                    {prop.title}
                </h5>
                <p className="mb-4  text-base text-neutral-600 text-justify    dark:text-neutral-200">
                    {prop.desc}
                </p>
                <Link href={prop.link}    >
                    <button
                        type="button"
                        className=" bottom-0 rounded bg-[#1c405a] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#557A95] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        {prop.buttonText}
                    </button>
                </Link>
            </div>
        </div>

    );
}