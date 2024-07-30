import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function PetCard() {
  return (
    < >
       <div className="relative mt-2 mb-2 ml-8 flex-col rounded-xl bg-white h-fit  bg-clip-border text-gray-800 shadow-md border border-blue-gray-100">
        <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg   ">
          
        </div>
        <div className="p-2 text-center">
          <h4 className="mb-1 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            
          </p>
          <hr></hr>
        </div>

        <div className=" w-full grid grid-cols-6  justify-center p-2 ">
          <div className="pl-2  " >
            
          </div>
          <div className="col-span-5 mt-1 " >
            Vaccination
          </div>
        </div>
        <div className=" w-full grid grid-cols-6  justify-center p-2 ">
          <div className="pl-2  " >
            
          </div>
          <div className="col-span-5 mt-1 " >
            Checkup List
          </div>
        </div>


        
        <hr></hr>
        <div className="flex-col w-full  justify-center p-2 ">
          <Link href="" >

            <Button
              size="sm"

              className="w-full border rounded   border-blue-gray-300  text-white  bg-[#7395AE] p-3 ">
              <span>Profile</span>
            </Button>
          </Link>
        </div>
      </div>



    </>
  )
}
