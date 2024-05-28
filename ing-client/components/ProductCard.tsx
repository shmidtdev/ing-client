"use client"

import Link from "next/link";
import {BuyButton} from "@/components/BuyButton";
import {WishListButton} from "@/app/WishListButton";

type ProductCardProps = {
  product: Product
}

export default function ProductCard({product} : ProductCardProps){
  return (
    <div className="relative rounded-lg">
      <div className="absolute right-2 top-2 w-fit bg-white rounded-full border-midgray border-[1px] z-30 hover:cursor-pointer hover:border-customRed duration-300">
        <WishListButton product={product}/>
      </div>
      <Link href={`../product/${product.id}`} className="hover:opacity-70 duration-300">
        <div className="bg-customGray w-full rounded-lg">
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
      <div className="w-full">
        <BuyButton product={product} />
      </div>
    </div>
  )
}