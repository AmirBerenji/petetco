"use client";
import { getAllPet } from "@/app/action/apiAction";
import { Pet } from "@/app/models/pet";
import { useEffect, useState } from "react";
import PetCard from "./petCard";
import { Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function PetListCardPage() {
  const [listPet, setListPet] = useState<Pet[]>([]);
  const [isLoading, setLoading] = useState(true);
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pets = await getAllPet();
      setListPet(pets);
      setLoading(false);
    } catch (error) {
      console.error("Error loading pets:", error);
    }
  };

  return (
    <>
    {isLoading == true? (<>
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center text-center text-2xl text-orange-500 ">
      Is loading...
    </div>
    </>):( <>

      {listPet.length === 0 ? (
        <div className="  flex justify-center items-center p-4 mt-20  ">
          <div className="w-full max-w-lg xl:w-1/3 lg:w-1/3 rounded-md bg-slate-50 shadow-md border border-blue-gray-100">
            {/* Circular Image */}
            <div className="shadow-lg rounded-full h-56 w-56 bg-white -mt-20 mx-auto border-10 border-blue-gray-800 flex justify-center items-center">
              <Image
                src="/assets/categoryimages/banner/banner.png"
                width={150}
                height={150}
                className="object-contain"
                alt="Banner"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h4 className="mb-2 font-sans text-2xl font-semibold text-blue-gray-900">
                No Result Found
              </h4>
              <hr className="mb-3" />

              <p className="text-gray-500 text-sm mb-3">
                Looks like you haven&apos;t added any pets yet. Let&apos;s
                change that! Click below to add your furry friend.
              </p>

              <hr className="mb-5" />

              <Link href={"/pet/petadd"}>
                <Button className="w-full" gradientDuoTone="pinkToOrange">
                  Add New Pet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full shadow-sm p-3">
          <div className="w-full flex justify-center md:justify-end">
            <Link href="/pet/petadd" className="w-full md:w-[200px]">
              <Button
                gradientDuoTone="pinkToOrange"
                className="w-full md:w-[200px]"
              >
                Add Your Pet
              </Button>
            </Link>
          </div>
        </div>
      )}

      {listPet.length > 2 ? (
        <div className="container mt-20 mb-10 w-3/4 m-auto">
          <div className="grid grid-cols-1  ">
            <div className="justify-items-center  grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2  ">
              {listPet.map((pet, i) => (
                <>
                  <div className="w-full mt-20 mr-7  " key={i}>
                    <PetCard pet={pet} key={i} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container  m-auto">
          <div className="grid xl:grid-cols-2 xl:p-10 gap-9 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0">
            <div className="justify-items-center  grid xl:grid-cols-2 md:grid-cols-1 sm:gap-0 sm:grid-cols-1 md:gap-0 mb-9">
              {listPet.map((pet, i) => (
                <>
                  <div className="w-full mt-20 " key={i}>
                    <PetCard pet={pet} key={i} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>) }
    </>
   
  );
}
