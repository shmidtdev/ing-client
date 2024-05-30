"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React, {createRef, useState} from "react";
import axios from "axios";
import {host} from "@/env";

export default function ContactForm(){
  const [loaded, setLoaded] = useState(false)
  const [clicked, setClicked] = useState(false)

  const emailRef = createRef<HTMLInputElement>()
  const nameRef = createRef<HTMLInputElement>()
  const phoneRef = createRef<HTMLInputElement>()
  
  const [politics, setPolitics] = useState(false)
  const [mail, setMail] = useState(false)
  
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    let isValid = (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).test(phoneRef.current?.value ?? "");
    
    if (!isValid){
      setError(true)
      return
    }
    
    let data : CallRequestDto = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      isMailAllowed: mail
    }

    axios.post(`${host}/api/mail/callRequest`, data).then(res => {
      if(res.data){
        setLoaded(true)
      }
      else {

      }
    })
  }

  return(
    <div>
      <form className="flex flex-col gap-3">
        <Input placeholder="Ваша почта" ref={emailRef}/>
        <Input placeholder="Ваше имя" ref={nameRef}/>
        <Input placeholder="Ваш телефон" ref={phoneRef}/>
        {(error && !loaded) && 
            <div className="text-customRed text-sm">
               Некоректный номер 
            </div>
        }
        <div>
          <div className="flex">
            <div className="">
              <input type="checkbox" id="terms" onInput={() => setPolitics(!politics)}/>
            </div>
            <label
              htmlFor="terms"
              className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Согласен c <Link href="../policy" className="text-blue-700 underline hover:text-blue-500">политикой
              конфиденциальности</Link>
            </label>
          </div>
          <div className="flex">
            <div className="">
              <input type="checkbox" id="getMail" onInput={() => setMail(!mail)}/>
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
      {!loaded && 
        <Button onClick={handleSubmit} className="w-full mt-4" disabled={!politics}>Отправить</Button>
      }      
      {loaded &&
        <Button onClick={handleSubmit} className="w-full mt-4 bg-green-500" disabled={true}>Заявка отправлена</Button>
      }
    </div>
  )
}