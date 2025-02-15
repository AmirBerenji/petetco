import MyInput from "@/app/component/general/MyInput";
import { Datepicker } from "flowbite-react";
import React from "react";

export default function PetAddPage() {
  return (
    <>
      <div className="grid grid-cols-4 p-5">
        <div className="w-full p-3 col-span-1 ">
          <div className="w-full">
            <div
              className="shadow-lg 
                    rounded-xl h-72 w-72 bg-white
                    m-auto border-10 border-blue-gray-800"
            ></div>
          </div>
        </div>
        <div className="w-full p-3 col-span-3 ">
          <div className=" w-full rounded-md bg-clip-border shadow-md border border-blue-gray-100 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>
              <MyInput label="Name" name="Name" placeholder="Your pet name" />
            </div>
            <div>
              <MyInput label="Name" name="Name" placeholder="Your pet name" />
            </div>
            <div>
              <Datepicker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
