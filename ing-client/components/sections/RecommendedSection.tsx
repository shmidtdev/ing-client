"use server"

import {host} from "@/env";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Container from "@/components/Container";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import {RightArrowWhiteIcon} from "@/Icons";

export default async function RecommendedSection(){
  let products: Product[] = []
  
  await axios.get(`${host}/api/product/GetRecommended`).then(res => products = res.data)
  
  return (
    <section className="mt-20 w-full">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-4xl mb-8 font-semibold text-start">Мы рекомендуем</h2>
          <Button>
            Перейти в каталог
            <RightArrowWhiteIcon/>
          </Button>
        </div>
        <Container>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="basis-1/6">
                  <div>
                    <ProductCard product={product}/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </Container>
      </Container>
    </section>
  )
}