import Link from "next/link";
import PriceFilter from "@/components/PriceFilter";
import {Accordion} from "@/components/ui/accordion";
import {CheckAreaContextProvider} from "@/app/CheckAreaContext";
import FilterSingleSection from "@/app/FilterSingleSection";

type FiltersSectionProps = {
  characteristics: Characteristic[],
  categories: Category[],
  minPrice?: number,
  maxPrice?: number
}

export default function FiltersSection({characteristics, categories, minPrice, maxPrice}: FiltersSectionProps) {
  const groups: any = characteristics.reduce((groups: any, item: Characteristic) => ({
    ...groups,
    [item.name]: [...(groups[item.name] || []), item]
  }), {});

  return (
    <div className="min-w-[350px] bg-white py-6 px-8 rounded-lg h-fit">
        {categories.length > 0 &&
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
        }
      {maxPrice > 0 && 
        <PriceFilter maxPrice={maxPrice} minPrice={minPrice}/>
      }
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