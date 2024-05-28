"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import * as sea from "node:sea";
import {Pagination, PaginationItemType} from "@nextui-org/pagination";
import {Button} from "@/components/ui/button";
import {ChevronIcon} from "@nextui-org/shared-icons";
import {cn} from "@nextui-org/system-rsc";
import {Suspense} from "react";

type ProductPaginationProps = {
  pagesAmount: number
}

export default function ProductPagination({pagesAmount} : ProductPaginationProps){
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  
  const currentPage = Number.parseInt(searchParams.get("page") ?? "1")
  
  const handleClick = (page: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page)
    
    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    router.push(`${pathName}${query}`)
  }

  return (
    <Suspense>
      <div className="w-full flex justify-center gap-3 mt-20">
        <Button
          size="sm"
          onClick={() => handleClick((currentPage - 1).toString())}
        >
          Назад
        </Button>
        <Pagination className="overflow-hidden" total={pagesAmount} page={currentPage} siblings={4} onChange={(page) => handleClick(page.toString())}/>
        <Button
          size="sm"
          onClick={() => handleClick((currentPage + 1).toString())}
        >
          Вперед
        </Button>
      </div>
    </Suspense>
  )
}