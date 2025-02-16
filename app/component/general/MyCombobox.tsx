"use client";
import React, { useState } from "react";

interface Props {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
  classNameLabel?: string;
  disabled?: boolean;
  defaultValue?: string;
  isNotFloatLabel?: boolean;
}

export default function MyDropdown(props: Props) {
  const [isSelected, setIsSelected] = useState(!!props.defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(event.target.value !== "");
    props.onChange?.(event);
  };

  return (
    <div className="relative border  m-4    border-gray-300 rounded-lg ">
      {props.isNotFloatLabel && (
        <label
          className={`absolute left-2 top-3 text-sm transition-all ${
            isSelected
              ? "text-blue-600 text-xs -top-2 bg-white px-1"
              : "text-slate-500 ml-2 "
          } ${props.classNameLabel}`}
        >
          {props.label}
        </label>
      )}
      <select
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        disabled={props.disabled}
        className={`border-0 p-2 w-full rounded-xl focus:border-[#b4bef3] focus-visible:outline-none ${
          props.className
        } ${isSelected ? "pt-3" : "pt-3"}`}
      >
        <option value=""></option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
