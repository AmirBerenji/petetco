"use client"
import { getAllPet } from "@/app/action/apiAction";
import { Pet } from "@/app/models/pet";
import { useEffect, useState } from "react";
import PetCard from "./petCard";
import { Button } from "flowbite-react";


export default function PetListCardPage() {
    
  const [listPet, setListPet] = useState<Pet[]>([]);

  useEffect(() => {    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pets = await getAllPet();
      setListPet(pets);
    } catch (error) {
      console.error('Error loading pets:', error);
    }
  };



  return (
    <>
        <div className="w-full pl-16 pt-5  " >
          <Button className="bg-violet-600" >
            Add New Pet
          </Button>
        </div>

          {listPet.length > 2 ? (
            <div className='container mt-20 mb-10 w-3/4 m-auto' >
              <div className='grid grid-cols-1  ' >
                <div className='justify-items-center -ml-9 grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2  ' >
                  {listPet.map((pet,i) => (
                    <>
                    <div className="w-full mt-20 mr-7 " key={i} >
                    <PetCard  pet={pet} key={i}/>
                    </div>
                    </>
                    
                  ))}
                </div >
              </div>
            </div >
          ) : (
            <div className='container  m-auto' >
              <div className='grid xl:grid-cols-2 xl:p-10 gap-9 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0' >
                <div className='justify-items-center -ml-9 grid xl:grid-cols-2 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0 mb-9' >
                  {listPet.map((pet,i) => (
                    <>
                    <div className="w-full mt-20 " key={i} >
                    <PetCard  pet={pet} key={i}/>
                    </div>
                    </>
                  ))}
                </div >
              </div>
            </div >
          )}
    
        </>
  )
}