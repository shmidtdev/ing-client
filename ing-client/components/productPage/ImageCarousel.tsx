"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import AddImagesModal from "@/components/AddImagesModal";
import {ApplicationContext} from "@/app/ApplicationContext";
import React, {useContext} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import DragDrop from "@/components/DragDrop";
import {WishListButton} from "@/app/WishListButton";
import {host} from "@/env";

type ImageCardProps = {
  image: string
}

export function ImageCard({image} : ImageCardProps){
  return (
    <Dialog>
      <DialogTrigger asChild>
          <img src={`${host}/storage/${image}`} className="cursor-pointer h-[250px]"/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
        </DialogHeader>
        <DialogBody>
          <img src={`${host}/storage/${image}`} className="w-[1750px]"/>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}

type ImageCarouselProps = {
  product: Product,
  images?: any[]
}

export default function ImageCarousel({product, images} : ImageCarouselProps){
  const {user} = useContext(ApplicationContext)
  
  let links = images?.map((x) => x.link)
  
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="w-full flex justify-end">
        {user?.userRole == 1 &&
            <AddImagesModal productId={product.id}/>
        }
        <div className="ml-4 my-auto w-[42px] h-[42px] bg-white rounded-full border-midgray border-[1px] hover:cursor-pointer hover:border-customRed duration-300">
          <WishListButton product={product}/>
        </div>
      </div>
      <div>
        {links?.length === 0 &&
            <img src="/Images/placeholder.png"/>
        }
        {
          //@ts-ignore
          links?.length > 0 &&
            <Carousel className="w-full max-w-xs">
                <CarouselContent className="w-full">
              {links?.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <ImageCard image={image}/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        }
      </div>
    </div>
  )
}