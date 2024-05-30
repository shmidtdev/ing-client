"use client"

import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {RightArrowWhiteIcon} from "@/Icons";
import axios from "axios";
import {host} from "@/env";
import {createRef, useState} from "react";

export default function SubscriptionForm() {
  const [loaded, setLoaded] = useState(false)
  const [policy, setPolicy] = useState(false);
  
  const emailRef = createRef<HTMLInputElement>()
  
  const handleSend = () => {
    let data = {
      email: emailRef.current?.value
    }
    
    axios.post(`${host}/api/mail/subscribe`, data)
      .then(res => setLoaded(res.data))
  }
  
  return (
    <div>
        <div className="flex gap-3">
          <Input placeholder="Ваша почта" ref={emailRef}/>
          {!loaded && 
            <Button type="submit" variant="customBlue" onClick={handleSend} disabled={!policy}>
              <RightArrowWhiteIcon/>
            </Button>
          }
          {loaded && 
            <Button type="submit" variant="customBlue" className="bg-green-500" onClick={handleSend} disabled>
              <RightArrowWhiteIcon/>
            </Button>
          }
        </div>
        <div className="flex mt-2">
          <div className="">
            <input type="checkbox" id="terms" className="border-white" onInput={() => setPolicy(!policy)}/>
          </div>
          <label
            htmlFor="terms"
            className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
          >
            Согласен c <Link href="../policy" className="text-blue-700 underline hover:text-blue-500">политикой
            конфиденциальности</Link>
          </label>
        </div>
    </div>
  )
}