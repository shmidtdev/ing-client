"use client"

import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import React from "react";
import DragDrop from "@/components/DragDrop";

interface IImagesProp {
  productId: string
}

export default function AddImagesModal({productId} : IImagesProp){
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Button variant="customRed">Добавить изображения</Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
          </DialogHeader>
          <DialogBody>
            <DragDrop productId={productId}/>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  )
}