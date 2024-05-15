"use client"

import axios from "axios";
import {createContext, useEffect, useState} from "react";
import {host} from "@/env";

interface IOrderContext {
  order?: OrderContextDto,
  handleOrderUpdate: (order: OrderContextDto) => void
}

export const OrderContext = createContext<IOrderContext>({
  order: undefined,
  handleOrderUpdate: (_order: OrderContextDto) => {throw Error("Not implemented")}
})

export const OrderContextProvider = ({children} : any) => {
  const [order, setOrder] = useState<OrderContextDto>()

  useEffect(() => {
    axios.get(`${host}/api/order/GetOrder`).then(res => setOrder(res.data))
  }, []);
  
  const handleOrderUpdate = (order: OrderContextDto) => {
    setOrder(order)
  }

  return (
    <OrderContext.Provider value={{order, handleOrderUpdate}}>
      {children}
    </OrderContext.Provider>
  )
}