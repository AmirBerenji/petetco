"use client"
import { getAllPet } from "@/app/action/apiAction";
import { Pet } from "@/app/models/pet";
import { useEffect, useState } from "react";
import PetCard from "./petCard";


export default function PetListCardPage() {
    
    const [listPet,setListPet] = useState<Pet[]>([])
    useEffect(() => {loadAllPet()},[])

    const loadAllPet = async () =>{
        const result = await getAllPet();
        setListPet(result);
    }

  return (
    <>
          {listPet.length > 2 ? (
            <div className='container mt-20 mb-10 w-3/4 m-auto' >
              <div className='grid grid-cols-1  ' >
                <div className='justify-items-center -ml-9 grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2  ' >
                  {listPet.map((pet,i) => (
                    <PetCard  pet={pet} key={i}/>
                  ))}
                </div >
              </div>
            </div >
          ) : (
            <div className='container  m-auto' >
              <div className='grid xl:grid-cols-2 gap-9 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0' >
                <div className='justify-items-center -ml-9 grid xl:grid-cols-1 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0 mb-9' >
                  {listPet.map((pet,i) => (
                    <PetCard  pet={pet} key={i}/>
                  ))}
                </div >
                <div className='w-full  xl:mt-5 xl:mb-10 xl:p-5 md:-mt-10 sm:-mt-10 md:-mb-10 sm:-mb-10 '>
                  <div className="rounded overflow-hidden border shadow-lg">
                    <img className="w-full" src="/assets/categoryimages/Petcare01.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Pet registration</div>
                      <p className="text-gray-700 text-base">
                        We request that you enter your pets information completely and accurately so that we can provide you with accurate service in the next and future stages.
                        <br />
                        <br />
                        Мы просим вас ввести информацию о вашем питомце полностью и точно, чтобы мы могли предоставить вам точный сервис на следующих и будущих этапах.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )}
        </>
  )
}