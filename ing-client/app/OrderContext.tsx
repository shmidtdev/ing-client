"use client"

import axios from "axios";
import {createContext, useEffect, useState} from "react";
import {host} from "@/env";

interface IOrderContext {
  order?: OrderContextDto,
  wishList?: WishList,
  handleOrderUpdate: (order: OrderContextDto) => void
  handleWishListUpdate: (wishList: WishList) => void
}

export const OrderContext = createContext<IOrderContext>({
  order: undefined,
  wishList: undefined,
  handleOrderUpdate: (_order: OrderContextDto) => {throw Error("Not implemented")},
  handleWishListUpdate: (_wishList: WishList) => {throw Error("Not implemented")},
})

export const OrderContextProvider = ({children} : any) => {
  const [order, setOrder] = useState<OrderContextDto>()
  const [wishList, setWishList] = useState<WishList>()

  useEffect(() => {
    axios.get(`${host}/api/order/GetOrder`).then(res => setOrder(res.data))
    axios.get(`${host}/api/wishLists/GetWishList`).then(res => setWishList(res.data))
  }, []);
  
  const handleOrderUpdate = (order: OrderContextDto) => {
    setOrder(order)
  }
  
  const handleWishListUpdate = (wishList: WishList) => {
    setWishList(wishList)
  }

  return (
    <OrderContext.Provider value={{order, wishList, handleOrderUpdate, handleWishListUpdate}}>
      {children}
    </OrderContext.Provider>
  )
}