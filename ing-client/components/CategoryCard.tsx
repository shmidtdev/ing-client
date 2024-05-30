import {RightArrowIcon} from "@/Icons";
import Link from "next/link";
import {host} from "@/env";

type CategoryTypeProps = {
  category: Category
}

export default function CategoryCard({category}: CategoryTypeProps) {
  return (
    <Link href={`../catalog/${category.nameEng}`}>
      <div
        className="h-[200px] relative bg-customGray p-1 rounded-lg hover:cursor-pointer hover:bg-midgray transition duration-300">
        <div className="m-2 text-sm flex flex-col h-full justify-between relative z-20">
          <div>
            <div className="py-2 px-4 bg-primary w-fit text-white text-sm rounded-lg">
              {category.name}
            </div>
            <div className="px-2 mt-2 text-gray">
              {category.amount} товаров
            </div>
          </div>
          <div className="bg-midgray p-1 w-fit rounded-lg mb-4">
            <RightArrowIcon/>
          </div>
        </div>
        <div className="absolute right-2 top-2 rounded-lg overflow-hidden">
          <img src={`${host}/storage/categoryimages/${category.nameEng}.png`} className="w-[180px] h-[180px] rounded-lg"/>
        </div>
      </div>
    </Link>
  )
}