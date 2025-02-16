"use client";
import { Datepicker } from "flowbite-react";
import React, { useState } from "react";

interface Props {
  label: string;
  name: string;
}

export default function MyDatePicker(props: Props) {
  return (
    <div className="relative border  m-4    border-gray-300 rounded-lg ">
      <label className="text-blue-600 text-xs -top-2 bg-white px-1 absolute left-2 z-50 transition-all">
        {props.label}
      </label>
      <input
        type="date"
        className="w-full border-0 rounded-xl p-3"
        name={props.name}
      />
    </div>
  );
}
