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
            <Image src={pet?.cover||''} width="300" height="300" alt="hero 1" className='' />
            
          </div>
          <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
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
