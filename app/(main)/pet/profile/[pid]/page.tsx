"use client"
import { getPet } from "@/app/action/apiAction";
import { Pet } from "@/app/models/pet";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function PetProfilePage({ params }: { params: { pid: string } }) {

  const[pet,setPet] = useState<Pet>(); 
  useEffect(() => {
    
    loadPet();
  },[]);

  const loadPet = async () =>{
    
    const result = await getPet(params.pid);
    setPet(result);
}
  return (
    <>
        <section className="w-full border-t-8 border-t-[#F2968F] py-10">
        <div className='container grid grid-cols-1 lg:grid-cols-3 mx-auto px-10 lg:px-40 items-center'>
          <div className="col-span-1 relative">
          
              <div className="w-full p-3 col-span-1 flex justify-center">
                  <div className="shadow-lg rounded-full lg:rounded-xl md:rounded-xl  ml-10   h-72 w-72 bg-slate-100 m-auto border-10 border-blue-gray-800 flex items-center justify-center overflow-hidden">
                    {pet?.cover ? (
                      <img
                        src={pet.cover}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-500">Image is not available!</span>
                    )}
                  </div>  
              </div>
          </div>
          <div className="col-span-1 lg:col-span-2 items-center flex-1">
            <h2 className='font-bold text-xl uppercase'>{pet?.name}</h2>
            <p className='text-justify text-lg mt-5' >
              {pet?.breed.name}/{pet?.breed.kind.name}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
