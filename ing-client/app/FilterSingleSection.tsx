"use client"

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ScrollArea} from "@/components/ui/scroll-area";
import CheckItem from "@/components/CheckItem";
import React, {useContext} from "react";
import {CheckAreaContext} from "@/app/CheckAreaContext";
import { Button } from "@/components/ui/button";
import {ApplicationContext} from "@/app/ApplicationContext";

type FilterSingleSectionProps = {
  name: string,
  groups: any
}

export default function FilterSingleSection({name, groups} : FilterSingleSectionProps){
  const {isChanged} = useContext(CheckAreaContext)
  const {handleUpdate} = useContext(ApplicationContext)
  
  let section = groups[name].sort((a: Characteristic, b: Characteristic) => Number.parseFloat(a.valueEng) - Number.parseFloat(b.valueEng))
  
  return (
    <AccordionItem value={name} key={name} className="relative">
      <AccordionTrigger className="font-medium flex justify-between">
        {name}
      </AccordionTrigger>
      <AccordionContent>
        <div className="max-h-[200px]">
          <ScrollArea className="h-[200px] py-2 px-4">
            {section.map((characteristic: Characteristic) => (
              <CheckItem key={characteristic.id} characteristic={characteristic}/>
            ))}
          </ScrollArea>
        </div>
        {
          isChanged &&
            <Button className="w-full" variant="custom" onClick={handleUpdate}>Применить</Button>
        }
      </AccordionContent>
    </AccordionItem>
  )
}