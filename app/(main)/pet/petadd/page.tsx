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
  const [petKind, setPetKind] = useState<Kind[]>([]);
  const [petBreed, setPetBreed] = useState<Breed[]>([]);
  const [petColor, setPetColor] = useState<Color[]>([]);

  const [selectPetKind, setSelectPetKind] = useState<Kind>();
  const [selectPetBreed, setSelectPetBreed] = useState("");
  const [selectPetColor, setSelectPetColor] = useState<Color>();
  const [selectPetGender, setSelectPetGender] = useState<String>();

  const [image, setImage] = useState<string | null>(null);

  // Handle image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.onerror = () => {
        console.error("Error reading file:", reader.error);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Selected file is not an image.");
    }
  };

  // Fetch pet kinds and colors
  const fetchData = async () => {
    try {
      const [petKinds, petColors] = await Promise.all([
        getAllPetKind(),
        getAllColor(),
      ]);
      setPetKind(petKinds);
      setPetColor(petColors);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  // Fetch breeds based on selected kind
  const getBreed = async (kindId: string) => {
    try {
      const breeds = await getAllPetBreed(kindId);
      setPetBreed(breeds);
    } catch (error) {
      console.error("Error loading breeds:", error);
    }
  };

  // Convert data to options for ComboBox
  const convertToOptions = (data: any[]) => {
    return data.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 p-5 gap-5">
        {/* Image Upload Section */}
        <div className="w-full p-3 col-span-1 flex justify-center">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="shadow-lg rounded-full lg:rounded-xl md:rounded-xl h-72 w-72 bg-white m-auto border-10 border-blue-gray-800 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Click to upload</span>
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Form Section */}
        <div className="w-full p-3 col-span-3">
          <div className="rounded-md bg-clip-border w-full shadow-md border border-blue-gray-100 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 p-5">
            {/* Name Input */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Name"
                name="Name"
                placeholder="Your pet name"
                isNotFloatLabel
              />
            </div>

            {/* Kind ComboBox */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Kind"
                label="Kind"
                options={convertToOptions(petKind)}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => getBreed(e.target.value)}
              />
            </div>

            {/* Breed ComboBox */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Breed"
                label="Breed"
                options={convertToOptions(petBreed)}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => setSelectPetBreed(e.target.value)}
              />
            </div>

            {/* Gender ComboBox */}
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

            {/* Color ComboBox */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyComboBox
                name="Color"
                label="Color"
                options={convertToOptions(petColor)}
                isNotFloatLabel
                className="w-full"
                classNameLabel="text-gray-700"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            {/* Birthday DatePicker */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyDatePicker name="Birthday" label="Birthday" />
            </div>

            {/* Passport Number Input */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Passport Number"
                name="Passport Number"
                placeholder="Passport Number"
                isNotFloatLabel
              />
            </div>

            {/* Chipset Number Input */}
            <div className="col-span-2 lg:col-span-1 md:col-span-1 xl:col-span-1">
              <MyInput
                label="Chipset Number"
                name="Chipset Number"
                placeholder="Chipset Number"
                isNotFloatLabel
              />
            </div>

            {/* Save Button */}
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
