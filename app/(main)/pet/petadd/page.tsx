"use client";
import {
  getAllColor,
  getAllPetBreed,
  getAllPetKind,
} from "@/app/action/apiAction";
import MyComboBox from "@/app/component/general/MyCombobox";
import MyDatePicker from "@/app/component/general/MyDatePicker";
import MyInput from "@/app/component/general/MyInput";
import { Breed } from "@/app/models/breed";
import { Color } from "@/app/models/color";
import { Kind } from "@/app/models/kind";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";

export default function PetAddPage() {
  const [petKind, setPetKind] = useState<Kind[]>();
  const [petBreed, setPetBreed] = useState<Breed[]>();
  const [petColor, setPetColor] = useState<Color[]>();

  const fetchData = async () => {
    try {
      const petKinds = await getAllPetKind();
      const petColors = await getAllColor();
      setPetKind(petKinds);
      setPetColor(petColors);
    } catch (error) {
      console.error("Error loading pets:", error);
    }
  };

  const getBreed = async (kindId: string) => {
    const breeds = await getAllPetBreed(kindId);
    setPetBreed(breeds);
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  useEffect(() => {}, [setPetBreed]);
  function ConvertToOptions(data: any) {
    return data.map((d: any, index: number) => ({
      value: d.id,
      label: d.name,
    }));
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 p-5 gap-5">
        <div className="w-full p-3 col-span-1 flex justify-center">
          <div
            className="shadow-lg 
                    rounded-full lg:rounded-xl md:rounded-xl h-72 w-72 bg-white
                    m-auto border-10 border-blue-gray-800"
          ></div>
        </div>
        <div className="w-full p-3 col-span-3">
          <div
            className="rounded-md bg-clip-border w-full 
          shadow-md border border-blue-gray-100 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 p-5"
          >
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Name"
                name="Name"
                placeholder="Your pet name"
                isNotFloatLabel
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Kind"
                label="Kind"
                options={petKind ? ConvertToOptions(petKind) : []}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => getBreed(e.target.value)}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Breed"
                label="Breed"
                options={petBreed ? ConvertToOptions(petBreed) : []}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Gender"
                label="Gender"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Color"
                label="Color"
                options={petColor ? ConvertToOptions(petColor) : []}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyDatePicker name="Birthday" label="Birthday" />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Passport Number"
                name="Passport Number"
                placeholder="Passport Number"
                isNotFloatLabel
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Chipset Number"
                name="Chipset Number"
                placeholder="Chipset Number"
                isNotFloatLabel
              />
            </div>
            <div className="col-span-2 justify-center items-center flex">
              <Button className="w-full sm:w-auto lg:w-44 md:w-44 xl:w-44">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
