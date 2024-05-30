"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React, {createRef, useState} from "react";
import axios from "axios";
import {host} from "@/env";

export default function SignInForm(){
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const handleSubmit = () => {
    let data : SignInDto  = {
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? ""
    }

    axios.post(`${host}/api/auth/signIn`, data).then(res => {
        setLoaded(true)
      if(res.data){
        window.location.reload()
      }
      else {
        setError(true)
      }
    })
  }

  return (
    <div>
      <form className="flex flex-col gap-3">
        <Input placeholder="Почта" ref={emailRef}/>
        <Input placeholder="Пароль" type="password" ref={passwordRef}/>
      </form>
      <div className="mt-4">
        {(error && loaded) && 
          <div className="text-customRed text-sm">Ошибка. Проверьте правильность логина и пароля</div>
        }
        <Button onClick={handleSubmit} className="w-full mt-2">Отправить</Button>
      </div>
    </div>
  )
}