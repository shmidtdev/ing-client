"use client"

import Link from "next/link";
import {BuyButton} from "@/components/BuyButton";
import {WishListButton} from "@/app/WishListButton";
import {NoImageIcon} from "@/Icons";
import {host} from "@/env";

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
        <div className="bg-customGray w-full rounded-lg p-6">
          {product.images?.length > 0 &&
            <img src={`${host}/storage/${product?.images[0].link}`} className="mx-auto rounded-lg w-[200px] h-[200px]"/>
          }
          {(product?.images === null || product.images.length === 0) &&
              <div className="flex justify-between h-[200px]">
                  <NoImageIcon />
              </div>
          }
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