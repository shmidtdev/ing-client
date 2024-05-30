"use client"

import {CartIcon} from "@/Icons";
import {AnimatePresence, motion} from "framer-motion";
import React, {createRef, useContext, useRef, useState} from "react";
import {CloseIcon} from "@nextui-org/shared-icons";
import {OrderContext} from "@/app/OrderContext";
import {Button} from "./ui/button";
import {useOnClickOutside} from "usehooks-ts";
import {CartRemoveButton} from "@/components/BuyButton";
import Link from "next/link";
import {ApplicationContext} from "@/app/ApplicationContext";
import axios from "axios";
import {host} from "@/env";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import SignInForm from "@/components/authorization/SigninForm";
import RegistrationForm from "@/components/authorization/RegistrationForm";
import {Input} from "@/components/ui/input";

export default function CartOverlay() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const {order} = useContext(OrderContext)
  const {handleOffCanvas} = useContext(ApplicationContext)

  const emailRef = createRef<HTMLInputElement>()
  const nameRef = createRef<HTMLInputElement>()
  const phoneRef = createRef<HTMLInputElement>()

  let amount = 0

  const handleClick = () => {
    setOpen(!open)
    handleOffCanvas(open)
  }

  const ref = useRef(null)

  useOnClickOutside(ref, () => {
    setOpen(false)
  })
  
  const handleSubmit = () => {
    let data: OrderCommitDto = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
      //@ts-ignore
      orderCommitItems: order?.orderContextItems.map((x) =>
        {
          let id = x.productMovement.product.id
          let amountOfElements = x.amountOfElements
          
          let smt = {id, amountOfElements}
          
          return smt
        }
      )
    }
    
    axios.post(`${host}/api/order/commitOrder`, data)
      .then(res => setLoaded(res.data))
  }

  return (
    <div ref={ref} className="my-auto">
      <div onClick={handleClick} className="cursor-pointer">
        <div className="flex flex-col">
          <div className="mx-auto">
            <CartIcon/>
          </div>
          <div className="text-[10px]">
            Корзина
          </div>
        </div>
      </div>
      <Dialog open={dialogOpen} onOpenChange={x => {
        setDialogOpen(x)
        setButtonDisabled(true)
      }}>
        <DialogContent>
          <DialogHeader>
          </DialogHeader>
          <DialogBody>
            <form className="flex flex-col gap-3">
              <Input placeholder="Ваша почта" ref={emailRef}/>
              <Input placeholder="Ваше имя" ref={nameRef}/>
              <Input placeholder="Ваш телефон" ref={phoneRef}/>
              <div>
                <div className="flex">
                  <div className="">
                    <input type="checkbox" id="terms" onInput={() => setButtonDisabled(!buttonDisabled)}/>
                  </div>
                  <label
                    htmlFor="terms"
                    className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Согласен c <Link href="../policy"
                                     className="text-blue-700 underline hover:text-blue-500">политикой
                    конфиденциальности</Link>
                  </label>
                </div>
              </div>
            </form>
            {!loaded && 
              <Button onClick={handleSubmit} className="w-full mt-4" disabled={buttonDisabled}>Отправить</Button>
            }
            {loaded && 
              <Button onClick={handleSubmit} className="w-full mt-4 bg-green-500" disabled={true}>Успешно доставлено</Button>
            }
          </DialogBody>
        </DialogContent>
      </Dialog>
      <div className="absolute -z-50 top-0 right-0">
        <AnimatePresence>
          {open &&
              <motion.div
                  initial={{x: "1000px"}}
                  animate={{x: "0px"}}
                  exit={{x: "1000px"}}
                  transition={{type: "just"}}
              >
                  <div className="h-screen w-[600px] bg-white px-6 pl-6 pr-8 drop-shadow-lg pt-[130px]">
                      <div className="w-full flex justify-end" onClick={handleClick}>
                          <CloseIcon className="cursor-pointer"/>
                      </div>
                      <h2 className="text-xl font-medium">Корзина</h2>
                      <div className="mt-6 h-[78%] overflow-y-auto">
                        {order?.orderContextItems?.map((orderItem) => (
                          <div className="flex justify-between gap-4 align-middle" key={orderItem.productMovement.id}>
                            <div className="flex gap-4">
                              <div className="my-auto">
                                <CartRemoveButton product={orderItem.productMovement.product} />
                              </div>
                              <div className="text-sm my-auto">
                                {orderItem.amountOfElements}
                              </div>
                              <div className="text-sm my-auto">x</div>
                            </div>
                            <Link href={`../product/${orderItem.productMovement.product.id}`} className="text-sm my-auto text-nowrap w-full truncate text-left">{orderItem.productMovement.product.title}</Link>
                            <div className="my-auto">{orderItem.sum > 0 ? orderItem.sum + "р." : "-"}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col justify-end">
                          <div className="mb-[380px]">
                              <div className="mb-6 pb-1 border-b-2 border-customDarkerGray flex justify-between">
                                  <span>Итого:</span>
                                  <span className="text-lg font-medium">{order?.totalSum} р.</span>
                              </div>
                          <Button className="w-full" onClick={() => {
                            setDialogOpen(true)
                            handleOffCanvas(false)
                            setOpen(false)}}> Оформить заказ</Button>
                          </div>
                      </div>
                  </div>
              </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}
