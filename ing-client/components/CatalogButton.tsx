import {CatalogIcon} from "@/Icons";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet";
import Container from "@/components/Container";
import HeaderCard from "@/components/HeaderCard";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function CatalogButton(){
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex bg-primary text-white py-3 px-4 rounded-md gap-2 text-sm border-primary border-2 hover:bg-primary/90 transition duration-300">
          <div className="my-auto">
            <CatalogIcon/>
          </div>
          <div>
            Каталог
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-3 w-[50%]">
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
              <HeaderCard />
            </div>
            <div className="mt-auto">
              <Link href="#" className="text-xl">sale@ing-impgrp.ru</Link>
              <div className="flex gap-8 mt-2">
                <div className="my-auto">
                  <Link href="#" className="text-xl">8 800 555 35 35</Link>
                  <div className="text-[10px]">Режим работы 10:00 - 19:00 (пн-пт)</div>
                </div>
                <Button>
                  Обратный звонок
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  )
}