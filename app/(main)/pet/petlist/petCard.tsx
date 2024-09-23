import { Pet } from "@/app/models/pet";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

interface Props {
  pet: Pet;
}

export default function PetCard(prop: Props) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const onClick = () => {
    router.push(`/pet/profile/${prop.pet.id}`);
  }

  return (
    <>
      <div className="relative h-[360px]  w-full  mt-2 mb-2 ml-8 rounded-md bg-white   bg-clip-border text-gray-800 shadow-md border border-blue-gray-100">
        <div
          className="shadow-lg 
        rounded-full h-56 w-56 bg-white
         -mt-20 m-auto border-10 border-blue-gray-800"
        >
          <Image
            src={prop.pet.cover}
            alt={prop.pet.name}
            width="10"
            height="10"
            priority
            className={` 
                            object-cover
                            group-hover:opacity-75
                            duration-700
                            ease-in-out
                            w-56 h-56
                            shadow-md
                            border
                            ${
                              isLoading
                                ? "rounded-full grayscale blur-xl scale-150"
                                : "rounded-full grayscale-0 blur-0 scale-100"
                            }
                            `}
            sizes="(max-width:700px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="p-2 text-center">
          <h4 className="mb-1 uppercase font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {prop.pet.name}
          </h4>
          <hr></hr>
          <div className="grid grid-cols-1 text-left p-3 text-gray-400 uppercase " >
              <div>
                  Breed: {prop.pet.breed.name}          
              </div> 
              <div>
                  Color: {prop.pet.color.name}          
              </div> 
              <div>
                  Gender: {prop.pet.gender}          
              </div>             
          </div>
          <hr></hr>
            <Button 
            onClick={onClick} 
            className="uppercase mt-5">
              Profile
            </Button>
        </div>
      </div>
    </>
  );
}
