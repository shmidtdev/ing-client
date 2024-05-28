"use client"

import {Input} from "@/components/ui/input";
import {useRouter, useSearchParams} from "next/navigation";
import {createRef, useState} from "react";

export default function HeaderSearch(){
  const router = useRouter()
  
  const ref = createRef<HTMLInputElement>()
  
  // @ts-ignore
  const handleKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      const current = new URLSearchParams();

      current.set("substring", ref.current?.value ?? "")

      const search = current.toString();
      const query = search ? `?${search}` : "";

      router.push(`../search/${query}`);
    }
  }
  
  return (
    <>
      <Input placeholder="Что будем искать?" ref={ref} onKeyDown={e => handleKeyDown(e)}/>
    </>
  )
}