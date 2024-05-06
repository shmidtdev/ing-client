"use client"

import {createContext, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import * as sea from "node:sea";

interface IApplicationContext {
  handleCheck: (characteristic: Characteristic) => void,
  handleUpdate: () => void
}

export const ApplicationContext = createContext<IApplicationContext>({
  handleCheck: (_characteristic: Characteristic) => {throw Error("Not implemented")},
  handleUpdate: () => {throw Error("Not Implemented")}
})

export const ApplicationContextProvider = ({children} : any) => {
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([])
  const [isChanged, setIsChanged] = useState(false)
  
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  
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
    
    console.log(characteristics)
  }
  
  const handleUpdate = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    characteristics.map((characteristic) => {
      current.set(characteristic.nameEng, characteristic.valueEng)
    })
    
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathName}${query}`);
  }
  
  return (
    <ApplicationContext.Provider value={{handleCheck, handleUpdate}}>
      {children}
    </ApplicationContext.Provider>
  )
}