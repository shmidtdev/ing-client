"use client"

import {createRef, useContext, useState} from "react";
import {ApplicationContext} from "@/app/ApplicationContext";
import {CheckAreaContext} from "@/app/CheckAreaContext";
import {useSearchParams} from "next/navigation";

type CheckItemProps = {
  characteristic: Characteristic
}

export default function CheckItem({characteristic}: CheckItemProps){
  const {handleCheck} = useContext(ApplicationContext)
  const {handleChange} = useContext(CheckAreaContext)
  
  let isChecked = false;

  const searchParams = useSearchParams()
  let param = searchParams.get(characteristic.nameEng)
  
  if(param !== null && param.split(',').includes(characteristic.valueEng))
    isChecked = true;
  
  const ref = createRef<HTMLInputElement>()
  
  return (
    <div className="flex gap-1 text-sm">
      <div className="flex flex-col justify-center">
        <input type="checkbox" defaultChecked={isChecked} ref={ref} onClick={() => {
          handleCheck(characteristic)
          handleChange()
        }}/>
      </div>
      <div>
        {characteristic.value}
      </div>
    </div>
  )
}