"use client"

import {Button} from "@/components/ui/button";
import {host} from "@/env";
import axios from "axios";
import React, {JSX, useContext, useEffect, useState} from "react";
import {OrderContext} from "@/app/OrderContext";

type BuyButtonProps = {
  product: Product
}

export function BuyButton({product}: BuyButtonProps){
  const {order} = useContext(OrderContext)
  
  const [button, setButton] = useState<JSX.Element>(<ToCartButton product={product} />)

  useEffect(() => {
    if(order?.orderContextItems.find(x => x.productMovement.product.id == product.id) !== undefined)
      setButton(<UpdateButtonSet product={product} />)
    else
      setButton(<ToCartButton product={product} />)
  }, [order?.totalSum]);
  
  return (
    <div>
      {button}
    </div>
  )
}

export function ToCartButton({product}: BuyButtonProps){
  let data: AddToOrderPostDto = {productId: product.id}

  const {handleOrderUpdate} = useContext(OrderContext)

  async function handlePost() {
    await axios.post(`${host}/api/order/addToOrder`, data)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          handleOrderUpdate(res.data)
      })
  }

  return (
    <div>
      <Button className="w-full" onClick={handlePost}>В корзину</Button>
    </div>
  )
}

export function AddButton({product}: BuyButtonProps){
  let data: AddToOrderPostDto = {productId: product.id}

  const {handleOrderUpdate} = useContext(OrderContext)

  async function handlePost() {
    await axios.post(`${host}/api/order/addToOrder`, data)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          handleOrderUpdate(res.data)
      })
  }

  return (
    <div>
      <Button className="w-[70px] text-xl" onClick={handlePost}>+</Button>
    </div>
  )
}

export function RemoveButton({product}: BuyButtonProps){
  let data: AddToOrderPostDto = {productId: product.id}

  const {handleOrderUpdate} = useContext(OrderContext)

  async function handlePost() {
    await axios.post(`${host}/api/order/removeFromOrder`, data)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          handleOrderUpdate(res.data)
      })
  }

  return (
    <div>
      <Button variant="customRed" className="w-[70px] text-xl" onClick={handlePost}>-</Button>
    </div>
  )
}

export function UpdateButtonSet({product}: BuyButtonProps){
  
  const {order} = useContext(OrderContext)

  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-4">
        <RemoveButton product={product} />
        <AddButton product={product} />
      </div>
      <div className="h-fit my-auto text-lg font-medium">
        {order?.orderContextItems.find(x => x.productMovement.product.id === product.id)?.amountOfElements ?? "0"}
      </div>
    </div>
  )
}

export function CartRemoveButton({product}: BuyButtonProps){
  let data: AddToOrderPostDto = {productId: product.id}

  const {handleOrderUpdate} = useContext(OrderContext)

  async function handlePost() {
    await axios.post(`${host}/api/order/removeFromOrder`, data)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          handleOrderUpdate(res.data)
      })
  }

  return (
    <div>
      <Button variant="customRed" className="h-[18px] w-[30px]" onClick={handlePost}>-</Button>
    </div>
  )
}