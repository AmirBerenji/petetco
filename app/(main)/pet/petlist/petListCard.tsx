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
    <div className='container m-auto mt-10' >
      <div className='justify-items-center -ml-9 grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2   ' >
        {
          listPet.map(pet => (
            <PetCard key={pet.id}/>
          ))
        }
      </div >
    </div>
  )
}