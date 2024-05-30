"use server"

import React, {useState} from "react";
import axios from "axios";
import {host} from "@/env";
import Container from "@/components/Container";
import {Button} from "@/components/ui/button";
import {RightArrowWhiteIcon} from "@/Icons";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function ActionSection(){
  let products: Product[] = []

  await axios.get(`${host}/api/product/GetActions`).then(res => products = res.data)

  return (
    <section className="mt-20 w-full">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-4xl mb-8 font-semibold text-start">Акции и скидки</h2>
          <Button >
            <Link href="../actions" className="flex">
              <div className="my-auto h-fit">
                Все акции
              </div>
              <div className="">
                <RightArrowWhiteIcon/>
              </div>
            </Link>
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