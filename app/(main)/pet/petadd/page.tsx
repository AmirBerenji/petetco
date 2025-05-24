"use client";
import {
  addPet,
  getAllColor,
  getAllPetBreed,
  getAllPetKind,
} from "@/app/action/apiAction";
import MyComboBox from "@/app/component/general/MyCombobox";
import MyDatePicker from "@/app/component/general/MyDatePicker";
import MyInput from "@/app/component/general/MyInput";
import { AddPet } from "@/app/models/addpet";
import { Breed } from "@/app/models/breed";
import { Color } from "@/app/models/color";
import { Kind } from "@/app/models/kind";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";

export default function PetAddPage() {
  const [petKind, setPetKind] = useState<Kind[]>([]);
  const [petBreed, setPetBreed] = useState<Breed[]>([]);
  const [petColor, setPetColor] = useState<Color[]>([]);
    const [isLoading, setLoading] = useState(false);

  const [selectPetKind, setSelectPetKind] = useState<Kind>();
  const [selectPetBreed, setSelectPetBreed] = useState<Breed>();
  const [selectPetColor, setSelectPetColor] = useState<Color>();
  const [selectPetGender, setSelectPetGender] = useState<String>();

  const [image, setImage] = useState<string | null>(null);

function base64ToFile(base64: string, filename: string): File {
  const arr = base64.split(",");
  const mime =  arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
  
       const formData = new FormData(event.currentTarget);

              const petData: AddPet = {
                        breed_id: selectPetBreed?.id ?? 0,
                        color_id: selectPetColor?.id ?? 0,
                        name: (formData.get("Name") as string) ?? "",
                         dob: (formData.get("Birthday") as string)
                          ? new Date(formData.get("Birthday") as string).toISOString().split("T")[0]
                          : "",
                        gender: selectPetGender?.toString() ?? "",
                        cover_image: base64ToFile(image??"", "cover1.jpg"),
                        chipset_number: (formData.get("Chipset Number") as string) ?? null,
                        passport_number: (formData.get("Passport Number") as string) ?? null,
                      };


      console.log(petData);                

      const result = await addPet(petData);
       console.log(result);
       
  
      setLoading(false);
    };









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
    <form onSubmit={handleSubmit} >
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
                onChange={(e) => {
                        const selected = petBreed.find(b => b.id === parseInt(e.target.value));
                        setSelectPetBreed(selected);
                      }}
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
                onChange={(e) => setSelectPetGender(e.target.value)}
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
                onChange={(e) => {
                      const selected = petColor.find(b => b.id === parseInt(e.target.value));
                      setSelectPetColor(selected);
                    }}
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
               <Button
                            size="2xs"
                            type="submit"
                            color="blue-gray"
                            className="w-full rounded border-blue-gray-300 text-white border bg-[#7395AE] p-2"
                          >
                            <span>Save</span>
                          </Button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}
