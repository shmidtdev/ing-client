"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import AddImagesModal from "@/components/AddImagesModal";
import {ApplicationContext} from "@/app/ApplicationContext";
import {useContext} from "react";

type ImageCardProps = {
  image: string
}

export function ImageCard({image} : ImageCardProps){
  return (
    <div>
      <img src={`http://ing-impgrp.ru:9000/${image}`} className=""/>
    </div>
  )
}

type ImageCarouselProps = {
  productId: string,
  images?: any[]
}

export default function ImageCarousel({productId, images} : ImageCarouselProps){
  const {user} = useContext(ApplicationContext)
  
  let links = images?.map((x) => x.link)
  
  return (
    <div className="bg-white rounded-lg p-8">
      {user?.userRole == 1 &&
        <div className="w-full flex justify-end">
          <AddImagesModal productId={productId}/>
        </div>
      }
      <div>
        {links?.length === 0 && 
            <img src="/Images/placeholder.png" className="w-[450px]"/>
        }
        {links?.length > 0 &&
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
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