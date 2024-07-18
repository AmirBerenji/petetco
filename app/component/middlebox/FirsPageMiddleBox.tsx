
import React from 'react'

interface Props {
    imageSrc: string ;
    link: string ;
    title: string ;
    desc: string ;
    color:string;
}

export default function FirsPageMiddleBox(prop: Props) {
    return (
        <>
        {/* c4b2a4 */}
            <div className={`w-full  lg:h-96 xl:h-96 my-8  grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-5  p-3 ${prop.color}` } >
                
                <div className="block" >

                </div>

                <div className="block col-span-2 xl:py-12 lg:py-12 text-justify xl:px-24 lg:px-24 sm:p-10 md:p-10  ">
                    <span className='text-[#3f3e42] mt-10 w-fix ' >
                        <h3 className='text-xl font-bold'>{prop.title}</h3>
                        <p>
                            {prop.desc}
                        </p>
                    </span>
                </div>

                <div className="block rounded-lg dark:bg-neutral-700 mt-9 ">
                    <div
                        className="relative overflow-hidden bg-cover bg-no-repeat text-center items-center"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            className="rounded-lg  border-teal-100  shadow-[0_4px_9px_-4px_#3b71ca]"
                            src= {prop.imageSrc}
                            alt="" />
                        <a href='#'>
                            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] text-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}