"use client";
import React, { useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  options: Option[]; // Changed to an array of objects
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
  const [selectedValue, setSelectedValue] = useState(
    props.value || props.defaultValue || ""
  );

  useEffect(() => {
    if (props.value !== undefined) {
      setSelectedValue(props.value); // Control the value from outside
    }
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIsSelected(value !== "");
    setSelectedValue(value);
    props.onChange?.(event);
  };

  return (
    <div className="relative border m-4 border-gray-300 rounded-lg">
      {props.isNotFloatLabel && (
        <label
          className={`absolute left-2 top-3 text-sm transition-all ${
            isSelected
              ? "text-blue-600 text-xs  bg-white px-1 -mt-5 "
              : "text-slate-500 ml-2 "
          } ${props.classNameLabel}`}
        >
          {props.label}
        </label>
      )}
      <select
        name={props.name}
        value={selectedValue}
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
