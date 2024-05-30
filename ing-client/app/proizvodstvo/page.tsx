import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import React from "react";

export default function Proizvodstvo(){
  return (
    <div className="bg-customGray pb-12">
      <Container>
        <div className="pt-8 pb-8">
          <div className="p-8 bg-white rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbLink href="../proizvodstvo">Производство</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Собственное производство в Москве для реализации проектов любого уровня сложности</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-xl">Изделия из нержавеющей стали:</h2>
            <div className="mt-4 flex flex-col gap-3">
              <div>- крепежные системы</div>
              <div>- фурнитура</div>
              <div>- ограждения</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Изделия из черного метала:</h2>
            <div className="mt-4 flex flex-col gap-3">
              <div>- несущие конструкции</div>
              <div>- крепежные системы</div>
              <div>- фурнитура</div>
              <div>- ограждения</div>
              <div>- производственное оборудование</div>
              <div>- оборудование для ритейла</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Обработка металла:</h2>
            <div className="mt-4 flex flex-col gap-3">
              <div>- резка</div>
              <div>- сварка</div>
              <div>- гибка</div>
              <div>- шлифовка и полировка</div>
              <div>- токарные и слесарные работы</div>
              <div>- покраска и антикоррозийная обработка металлов</div>
            </div>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from(Array(14).keys())?.map((x, index) => (
                <CarouselItem key={index} className="basis-1/2">
                    <img src={`/Images/proizvodstvo/${x}.webp`} className="rounded-lg h-[450px] object-contain"/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              Группа компаний KIN LONG с 2006 года изготавливает и поставляет изделия на рынок России из нержавеющей и
              черной стали. Дополнительное производство в Москве позволяет оперативно реализовывать проекты любого
              уровня сложности. Наше конструкторское бюро имеет большой опыт выполнения проектных работы и технических
              расчетов, разработки чертежей нестандартных конструкций, технической документации стадии КМ и КМД.
            </div>
            <div>
              Собственное монтажное подразделение реализовало большое количество проектов, от простых до очень сложных.
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}