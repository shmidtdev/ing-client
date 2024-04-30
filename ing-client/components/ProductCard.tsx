import {HeartIcon} from "@/Icons";
import {Button} from "@/components/ui/button";

export default function ProductCard(){
  return (
    <div className="bg-neutral-100 w-[300px] relative p-4 rounded-lg">
      <div className="absolute right-2 top-2 w-fit bg-white rounded-full p-2">
        <HeartIcon/>
      </div>
      <img src="/Images/placeholder.png" className="mx-auto"/>
      <div className="font-semibold text-lg">Товар</div>
      <div className="text-sm">Краткое описание или характеристики товара</div>
      <div className="font-bold text-xl mt-2">2320 р.</div>
      <div className="flex justify-between mt-2 gap-2">
        <Button variant="outline" className="w-1/2">Подробнее</Button>
        <Button className="w-1/2">В корзину</Button>
      </div>
    </div>
  )
}