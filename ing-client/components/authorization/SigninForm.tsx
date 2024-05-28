"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React, {createRef, useState} from "react";
import axios from "axios";
import {host} from "@/env";

export default function SignInForm(){
  const [loaded, setLoaded] = useState(false)

  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const handleSubmit = () => {
    let data : SignInDto  = {
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? ""
    }

    axios.post(`${host}/api/auth/signIn`, data).then(res => {
      if(res.status === 200)
        setLoaded(true)
    })
  }

  return (
    <div>
      <form className="flex flex-col gap-3">
        <Input placeholder="Ваша почта" ref={emailRef}/>
        <Input placeholder="Придумайте пароль" type="password" ref={passwordRef}/>
      </form>
      <Button onClick={handleSubmit} className="w-full mt-4">Отправить</Button>
    </div>
  )
}