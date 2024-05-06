"use client"

import {Checkbox} from "@/components/ui/checkbox";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";
import PriceFilter from "@/components/PriceFilter";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import CheckItem from "@/components/CheckItem";
import {CheckAreaContext, CheckAreaContextProvider} from "@/app/CheckAreaContext";
import FilterSingleSection from "@/app/FilterSingleSection";

type FiltersSectionProps = {
  characteristics: Characteristic[],
  categories: Category[],
  maxPrice?: number
}

export default function FiltersSection({characteristics, categories, maxPrice}: FiltersSectionProps) {
  const groups: any = characteristics.reduce((groups, item) => ({
    ...groups,
    [item.name]: [...(groups[item.name] || []), item]
  }), {});

  return (
    <div className="ml-4 min-w-[300px]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Категории
        </h2>
        <div className="flex flex-col text-sm ml-4 font-semibold">
          {categories.map((category) => (
            <Link href={`../catalog/${category.nameEng}`} key={category.nameEng}
                  className="w-fit hover:text-customBlue">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <PriceFilter maxPrice={maxPrice}/>
      <div>
        <Accordion type="single" collapsible>
          {Object.keys(groups).map((key) => (
            <CheckAreaContextProvider key={key}>
              <FilterSingleSection name={key} groups={groups} />
            </CheckAreaContextProvider>
          ))}
        </Accordion>
      </div>
    </div>
  )
}