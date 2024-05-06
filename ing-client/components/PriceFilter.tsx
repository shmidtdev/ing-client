"use client"

import {Slider} from "@/components/ui/slider";
import {Input} from "@/components/ui/input";
import {createRef, useState} from "react";

type PriceFilterProps = {
  maxPrice?: number
}

export default function PriceFilter({maxPrice} : PriceFilterProps){
  const [amount, setAmount] = useState(maxPrice ?? 0)
  
  const inputRef = createRef<HTMLInputElement>()
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Цена</h3>
      <Slider defaultValue={[amount]} value={[amount]} max={maxPrice} step={1} onValueChange={(value) => setAmount(value[0])}/>
      <div className="flex gap-6 mt-4">
        <Input type="number" defaultValue={0}/>
        <Input type="number" max={maxPrice} ref={inputRef} defaultValue={amount} onInputCapture={() => setAmount(Number.parseInt(inputRef.current?.value ?? "0"))}/>
      </div>
    </div>
  )
}