"use client"

import {createContext, useState} from "react";

interface ICheckAreaContext {
  isChanged: boolean
  handleChange: () => void
}

export const CheckAreaContext = createContext<ICheckAreaContext>({
  isChanged: false,
  handleChange: () => {throw Error("Not Implemented")},
})

export const CheckAreaContextProvider = ({children} : any) => {
  const [isChanged, setIsChanged] = useState(false)
  
  const handleChange = () => {
    setIsChanged(true)
  }
  
  return (
    <CheckAreaContext.Provider value={{isChanged, handleChange}}>
      {children}
    </CheckAreaContext.Provider>
  )
}