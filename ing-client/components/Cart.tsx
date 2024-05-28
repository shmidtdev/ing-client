"use client"

import {CartIcon} from "@/Icons";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {Label} from "@/components/ui/label";
import {useContext} from "react";
import {OrderContext} from "@/app/OrderContext";

export default function Cart(){
  const {order} = useContext(OrderContext)
  let movements = order?.orderContextItems.map((x) => x.productMovement) ?? []
  
  return (
  <Sheet>
    <SheetTrigger asChild>
      <div className="flex flex-col">
        <div className="mx-auto">
          <CartIcon/>
        </div>
        <div className="text-[10px]">
          Корзина
        </div>
      </div>
    </SheetTrigger>
    <SheetContent className="w-[700px]">
      <SheetHeader>
        <SheetTitle>Корзина</SheetTitle>
      </SheetHeader>
      <div className="relative">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <div>
          {movements.map((movement) => (
            <div className="flex" key={movement.id}>
              <div className="text-sm">
                {movement.product.title}
              </div>
              <div>
                {movement.product.price}
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 mb-6">
          <Button className="w-full">Отправить заявку</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
  )
}