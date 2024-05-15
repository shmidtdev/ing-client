"use client"

import Container from "@/components/Container";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CategoryCard from "@/components/CategoryCard";
import axios from "axios";
import {host} from "@/env";
import {useContext} from "react";
import {ApplicationContext} from "@/app/ApplicationContext";

export default  function CategoryCarousel(){
  const {categories} = useContext(ApplicationContext)
  
  return (
    <section className="mt-12 w-full px-12">
      <Container>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div>
                  <CategoryCard category={category}/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Container>
    </section>
  )
}