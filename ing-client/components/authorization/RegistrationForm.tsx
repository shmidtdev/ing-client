"use client"

import React, {createRef, useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import {host} from "@/env";

export default function RegistrationForm(){
  
  const [loaded, setLoaded] = useState(false)
  
  const emailRef = createRef<HTMLInputElement>()
  const nameRef = createRef<HTMLInputElement>()
  const phoneRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()
  
  const politicsRef = createRef<HTMLInputElement>()
  const allowMailRef = createRef<HTMLInputElement>()
  
  const handleSubmit = () => {
    let data : RegistrationDto = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      isMailAllowed: false
    }
    
    axios.post(`${host}/api/auth/registration`, data).then(res => {
      if(res.status === 200)
        setLoaded(true)
    })
  }

  return(
    <div>
      <form className="flex flex-col gap-3">
        <Input placeholder="Ваша почта" ref={emailRef}/>
        <Input placeholder="Ваше имя" ref={nameRef}/>
        <Input placeholder="Ваш телефон" ref={phoneRef}/>
        <Input placeholder="Придумайте пароль" type="password" ref={passwordRef}/>
        <div>
          <div className="flex">
            <div className="">
              <input type="checkbox" id="terms" ref={politicsRef}/>
            </div>
            <label
              htmlFor="terms"
              className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Согласен c <Link href="#" className="text-blue-700 underline hover:text-blue-500">политикой
              конфиденциальности</Link>
            </label>
          </div>
          <div className="flex">
            <div className="">
              <input type="checkbox" id="getMail" ref={allowMailRef}/>
            </div>
            <label
              htmlFor="getMail"
              className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Подписаться на почтовую рассылку
            </label>
          </div>
        </div>
      </form>
        <Button onClick={handleSubmit} className="w-full mt-4">Отправить</Button>
    </div>
  )
}