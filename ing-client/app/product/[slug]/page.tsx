﻿"use server"

import Container from "@/components/Container";
import axios from "axios";
import {host} from "@/env";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import ImageCarousel from "@/components/productPage/ImageCarousel";
import {BuyButton} from "@/components/BuyButton";
import RecommendedSection from "@/components/sections/RecommendedSection";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import {WishListButton} from "@/app/WishListButton";

export default async function ProductPage({params, searchParams}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let dto: ProductPageContextDto = {
    product: {
      id: "",
      title: "",
      titleEng: "",
      images: undefined,
      price: undefined,
      oldPrice: undefined,
      isRecommended: false,
      category: "",
      rating: undefined,
      characteristics: []
    },
    breadCrumbs: []
  };

  await axios.get(`${host}/api/product/getProduct?id=${params.slug}`)
    .then(res => dto = res.data);

  let products: Product[] = []

  await axios.get(`${host}/api/product/GetRecommended`).then(res => products = res.data)

  let product = dto.product;
  let breadCrumbs = dto.breadCrumbs;

  return (
    <div className="bg-customGray pt-8">
      <Container>
        <div className="bg-white rounded-lg p-8">
          <div className="">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                {breadCrumbs.reverse().map((breadCrumb, index) => {
                  if (index === breadCrumbs.length - 1) {
                    return (
                      <>
                        <BreadcrumbItem>
                          <BreadcrumbLink href={`../${breadCrumb.slug}`}>{breadCrumb.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                      </>
                    )
                  } else {
                    return (
                      <>
                        <BreadcrumbItem>
                          <BreadcrumbLink href={`../${breadCrumb.slug}`}>{breadCrumb.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                      </>
                    )
                  }
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h2 className="text-2xl font-medium mt-6">{product.title}</h2>
        </div>
        <div className="flex justify-between mt-8">
          <div className="w-[70%]">
            <ImageCarousel product={product} images={product.images}/>
            <div className="w-full bg-white rounded-lg my-8 p-8">
              <h3 className="text-2xl mb-6">Характеристики</h3>
              {product.characteristics.map((characteristic) => (
                <div key={characteristic.valueEng} className="flex justify-between text-md mb-2">
                  <div>
                    {characteristic.name}
                  </div>
                  <div>
                    {characteristic.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg h-fit py-8 px-8 mb-8">
              <h2 className="text-lg font-medium mb-8">Рекомендуемые товары</h2>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="px-16"
              >
                <CarouselContent className="">
                  {products.map((product, index) => (
                    <CarouselItem key={index} className="basis-1/4">
                      <div>
                        <ProductCard product={product}/>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
              </Carousel>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg ml-8 mb-8 sticky top-[150px]">
              <div className="text-3xl font-semibold">
                {product.price} р.
              </div>
              <div className="my-4 border-b-2 border-customDarkerGray pb-2">
                Можно оплатить картой.
              </div>
              <div className="my-4 border-b-2 border-customDarkerGray pb-2">
                <div className="mb-2">Условия поставки:</div>
                <div className="ml-2">
                  <div>
                    65 календарных дней при стандартной доставке.
                  </div>
                  <div>
                    45 календарных дней при ускоренной.
                  </div>
                  <div>
                    Сумма заказа от 15 000 рублей.
                  </div>
                </div>
              </div>
              <div className="my-4 border-b-2 border-customDarkerGray pb-2">
                <div className="mb-2 cursor-pointer text-customBlue">Требуется объектная скидка? Отправьте заявку.</div>
              </div>
              <div className="mt-8">
                <BuyButton product={product}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}