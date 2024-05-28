"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Suspense} from "react";

export default function ProductOrderSelect() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()

  const orders = ["По названию", "По цене", "По характеристикам"]
  let orderType = Number.parseInt(searchParams.get("orderType") ?? "0")
  
  const handleClick = (orderType: string) => {

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("orderType", orderType.toString())

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathName}${query}`)
  }

  return (
    <Suspense>
      <div className="w-fit ml-auto">
        <Select onValueChange={(x) => handleClick(x)}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder={orders[orderType]}/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">По названию</SelectItem>
            <SelectItem value="1">По цене</SelectItem>
            <SelectItem value="2">По характеристикам</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Suspense>
  )
}