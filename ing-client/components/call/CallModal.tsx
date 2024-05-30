import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import React from "react";
import ContactForm from "@/components/ContactForm";

export default function CallModal(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:underline">Обратный звонок</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl">
            Заказать обратный звонок
          </h2>
        </DialogHeader>
        <DialogBody>
          <ContactForm />
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}