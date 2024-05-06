import {RightArrowIcon} from "@/Icons";

type CategoryTypeProps = {
  category: Category
}

export default function CategoryCard({category} : CategoryTypeProps){
  return (
    <div className="h-[200px] relative bg-neutral-100 p-1 rounded-lg hover:cursor-pointer hover:bg-midgray transition duration-300">
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
          <RightArrowIcon />
        </div>
      </div>
      <div className="absolute w-[200px] right-0 top-0">
        <img src="/Images/placeholder.png" className=""/>
      </div>
    </div>
  )
}