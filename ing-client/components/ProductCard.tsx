"use client"

import {HeartIcon} from "@/Icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {BuyButton} from "@/components/BuyButton";

type ProductCardProps = {
  product: Product
}

export default function ProductCard({product} : ProductCardProps){
  return (
    <div className="w-[260px] relative rounded-lg">
      <div className="absolute right-2 top-2 w-fit bg-white rounded-full border-midgray border-[1px] z-30 hover:cursor-pointer hover:border-customRed duration-300">
        <div className="heart duration-200 p-2">
          <HeartIcon/>
        </div>
      </div>
      <Link href={`../product/${product.id}`} className="hover:opacity-70 duration-300">
        <div className="bg-neutral-100 w-full rounded-lg">
          <img src="/Images/placeholder.png" className="mx-auto"/>
        </div>
        <div className="p-2">
          <div className="font-semibold text-lg">{product.title}</div>
          <div className="text-sm">
            {product.characteristics.map((characteristic) => (
              <div key={characteristic.id}>
                {characteristic.value}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            {product.oldPrice !== 0 && <div className="font-bold text-xl line-through">{product.oldPrice} р.</div>}
            {product.price !== 0 && <div className="font-bold text-xl">{product.price} р.</div>}
            {product.price === 0 && <div className="font-bold text-sm">Уточняйте цену у менеджера</div>}
          </div>
        </div>
      </Link>
      <div className="flex justify-between gap-2 px-2">
        <Button variant="outline" className="w-1/2" onClick={event => {
          event.stopPropagation()
        }}>
          Подробнее
        </Button>
        <BuyButton product={product} />
      </div>
    </div>
  )
}