'use client'
import { FloatingLabel } from 'flowbite-react';
import React, { useState } from 'react'

interface Props {
    placeholder?: string;
    name: string;
    type?: string;
    label: string;
    value?: string;
    maxLength?: string | any;
    onChange?: any;
    onKeyUp?: any;
    required?: any;
    className?: string;
    classNameLabel?: string;
    disabled?: boolean;
    defaultValue?: string
}

export default function MyInput(prop: Props) {
    const [text, setText] = useState(false)

    const changeText = (event: any) => {
        if (event.target.value == "") {
            setText(false)
        } else {
            setText(true)
        }
    }
    return (
        <div className="m-2 grid p-2 "  >
            {/* <FloatingLabel variant="outlined" label={prop.label} name={prop.name} placeholder={prop.placeholder} onChange={changeText} readOnly={prop.disabled} defaultValue={prop.defaultValue} className={` ${prop.className} `} /> */}
            {text ? (<label className={`text-blue-gray-700 mb-1 text-sm font-semibold ${prop.classNameLabel} `}>{prop.label}</label>) : (<><label>&nbsp;</label></>)}
            <input {...prop} className={`border-b-2 border-gray-400 placeholder-gray-600 p-2 focus:border-[#b4bef3] focus-visible:outline-none ${prop.className} `} onChange={changeText} readOnly={prop.disabled} defaultValue={prop.defaultValue}/>
        </div>
    )
}