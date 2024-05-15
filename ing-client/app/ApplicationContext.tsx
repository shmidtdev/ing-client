"use client"

import {createContext, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import axios from "axios";
import {host} from "@/env";

interface IApplicationContext {
  handleCheck: (characteristic: Characteristic) => void,
  handleMinPriceChange: (minPrice: number) => void,
  handleMaxPriceChange: (maxPrice: number) => void,
  handleUpdate: () => void,
  categories: Category[]
}

export const ApplicationContext = createContext<IApplicationContext>({
  handleCheck: (_characteristic: Characteristic) => {throw Error("Not implemented")},
  handleMinPriceChange: (_minPrice: number) => {throw Error("Not implemented")},
  handleMaxPriceChange: (_maxPrice: number) => {throw Error("Not implemented")},
  handleUpdate: () => {throw Error("Not Implemented")},
  categories: []
})

export const ApplicationContextProvider = ({children} : any) => {
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [isChanged, setIsChanged] = useState(false)
  
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    axios.get(`${host}/api/catalog/GetCategoryChildrenInfo?categoryName=catalog`).then(res => setCategories(res.data))
  }, []);
  
  const handleCheck = (characteristic: Characteristic) => {
    if (characteristics.includes(characteristic)){
      let tmp = characteristics
      let index = characteristics.indexOf(characteristic)
      
      tmp.splice(index, 1)
      
      setCharacteristics(tmp)
    }
    else {
      let tmp = characteristics
      tmp.push(characteristic)
      
      setCharacteristics(tmp)
    }
  }
  
  const handleMinPriceChange = (minPrice: number) => setMinPrice(minPrice)
  const handleMaxPriceChange = (maxPrice: number) => setMaxPrice(maxPrice)
  
  const handleUpdate = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    characteristics.map((characteristic) => {
      let param = searchParams.get(characteristic.nameEng)
      
      if (param === null)
        current.set(characteristic.nameEng, characteristic.valueEng)
      
      if (param !== null && !param.split(',').includes(characteristic.valueEng))
        current.set(characteristic.nameEng, `${param},${characteristic.valueEng}`)
    })

    current.set("minPrice", minPrice.toString())
    current.set("maxPrice", maxPrice.toString())
    
    current.delete("page")
    current.set("page", "1")
    
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathName}${query}`);
  }
  
  return (
    <ApplicationContext.Provider value={{handleCheck, handleUpdate, handleMinPriceChange, handleMaxPriceChange, categories}}>
      {children}
    </ApplicationContext.Provider>
  )
}