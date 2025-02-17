"use client";
import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";

interface Props {
  placeholder?: string;
  name: string;
  type?: string;
  label: string;
  value?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  classNameLabel?: string;
  disabled?: boolean;
  defaultValue?: string;
  isNotFloatLabel?: boolean;
}

export default function MyInput(props: Props) {
  const [isTextEntered, setIsTextEntered] = useState(false);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTextEntered(event.target.value !== "");
    props.onChange?.(event);
  };

  return (
    <div className="m-2 grid p-2">
      {props.isNotFloatLabel ? (
        <FloatingLabel
          variant="outlined"
          label={props.label}
          name={props.name}
          onChange={changeText}
          readOnly={props.disabled}
          defaultValue={props.defaultValue}
          className={props.className}
        />
      ) : (
        <>
          {isTextEntered ? (
            <label
              className={`text-blue-gray-700 mb-1 text-sm font-semibold ${props.classNameLabel}`}
            >
              {props.label}
            </label>
          ) : (
            <label>&nbsp;</label>
          )}
          <input
            {...props}
            className={`border-b-2 border-gray-400 placeholder-gray-600 p-2 focus:border-[#b4bef3] focus-visible:outline-none ${props.className}`}
            onChange={changeText}
            readOnly={props.disabled}
          />
        </>
      )}
    </div>
  );
}
