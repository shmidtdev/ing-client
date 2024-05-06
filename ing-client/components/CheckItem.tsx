"use client"

import {createRef, useContext} from "react";
import {ApplicationContext} from "@/app/ApplicationContext";
import {CheckAreaContext} from "@/app/CheckAreaContext";

type CheckItemProps = {
  characteristic: Characteristic
}

export default function CheckItem({characteristic}: CheckItemProps){
  const {handleCheck} = useContext(ApplicationContext)
  const {handleChange} = useContext(CheckAreaContext)
  
  const ref = createRef<HTMLInputElement>()
  
  return (
    <div className="flex gap-1 text-sm">
      <div className="flex flex-col justify-center">
        <input type="checkbox" ref={ref} onClick={() => {
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