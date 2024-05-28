"use client"

import {HeartIcon} from "@/Icons";
import React, {useContext, useEffect, useState} from "react";
import {OrderContext} from "@/app/OrderContext";
import axios from "axios";
import {host} from "@/env";

type WishListButtonProps = {
  product: Product
}

export function WishListButton({product} : WishListButtonProps) {
  const {wishList} = useContext(OrderContext)
  
  const [button, setButton] = useState(<AddToWishList product={product} />)
  
  useEffect(() => {
    if(wishList?.productMovements?.find(x => x.product.id == product.id) !== undefined)
      setButton(<RemoveFromWishList product={product} />)
    else
      setButton(<AddToWishList product={product} />)
  }, [wishList?.productMovements?.length]);
  
  return (
    button
  )
}

type AddWishListButtonProps = {
  product: Product
}
export function AddToWishList({product} : AddWishListButtonProps){
  const {handleWishListUpdate} = useContext(OrderContext)

  let data: AddToWishListPostDto = {productId: product.id}
  async function handlePost() {
    await axios.post(`${host}/api/wishLists/addToWishList`, data)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          handleWishListUpdate(res.data)
      })
  }
  
  return (
    <div className="heart duration-200 p-2 hover:text-customRed" onClick={handlePost}>
      <HeartIcon/>
    </div>
  )
}

type RemoveWishListButtonProps = {
  product: Product
}
export function RemoveFromWishList({product} : RemoveWishListButtonProps){
  let data: AddToOrderPostDto = {productId: product.id}

  const {handleWishListUpdate} = useContext(OrderContext)
  
  async function handlePost() {
    await axios.post(`${host}/api/wishLists/removeFromWishList`, data)
      .then(res => {
        if (res.status >= 200 && res.status < 300)
          handleWishListUpdate(res.data)
      })
  }
  
  return (
    <div className="duration-200 p-2 text-customRed border-customRed" onClick={handlePost}>
      <HeartIcon/>
    </div>
  )
}