"use client"

import {Input} from "@/components/ui/input";
import {createRef, Suspense, useContext, useState} from "react";
import {Slider} from "@nextui-org/slider";
import {Button} from "@/components/ui/button";
import {useSearchParams} from "next/navigation";
import {ApplicationContext} from "@/app/ApplicationContext";

type PriceFilterProps = {
  minPrice?: number
  maxPrice?: number
}

export default function PriceFilter({minPrice, maxPrice} : PriceFilterProps){
  const searchParams = useSearchParams()
  
  const [amount, setAmount] = 
    useState<number[]>([
      Number.parseInt(searchParams.get("minPrice") ?? minPrice?.toString() ?? "0"),
      Number.parseInt(searchParams.get("maxPrice") ?? maxPrice?.toString() ?? "0")])
  const [isChanged, setIsChanged] = useState(false)
  
  const {handleMinPriceChange, handleMaxPriceChange, handleUpdate} = useContext(ApplicationContext)
  
  const minRef = createRef<HTMLInputElement>()
  const maxRef = createRef<HTMLInputElement>()
  
  return (
    <Suspense>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Цена</h3>
        <Slider
          aria-labelledby="price"
          formatOptions={{style: "currency", currency: "USD"}}
          step={10}
          maxValue={maxPrice}
          minValue={0}
          value={amount}
          classNames={{
            track: "bg-customGray",
            filler: "bg-customBlue"
          }}
          //@ts-ignore
          onChange={(x : number[]) => {
            handleMinPriceChange(x[0])
            handleMaxPriceChange(x[1])
            setIsChanged(true)
            setAmount(x)
          }}
          className="max-w-md"
        />
        <div className="flex gap-6 mt-4">
          <Input type="number" min={minPrice} ref={minRef} value={amount[0]} onInputCapture={() => {
            setIsChanged(true)
            setAmount([Number.parseInt(minRef.current?.value ?? "0"), amount[1]])}
          }/>
          <Input type="number" max={maxPrice} ref={maxRef} value={amount[1]} onInputCapture={() => {
            setIsChanged(true)
            setAmount([amount[0], Number.parseInt(maxRef.current?.value ?? "0")])}
          }/>
        </div>
        {isChanged &&
            <Button variant="customBlue" className="w-full mt-6" onClick={handleUpdate}>
                Применить
            </Button>
        }
      </div>
    </Suspense>
  )
}