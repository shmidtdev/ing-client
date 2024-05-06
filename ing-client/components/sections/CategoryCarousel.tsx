"use server"

import Container from "@/components/Container";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CategoryCard from "@/components/CategoryCard";
import axios from "axios";
import {host} from "@/env";

export default async function CategoryCarousel(){
  let categories : Category[] = [];
  
  await axios.get(`${host}/catalog/GetCategoryChildrenInfo?categoryName=Catalog`).then(res => categories = res.data)
  
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