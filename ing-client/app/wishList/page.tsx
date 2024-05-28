"use client"

import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {useContext} from "react";
import {OrderContext} from "@/app/OrderContext";

export default function WishList(){
  const {wishList} = useContext(OrderContext)
  
  let products = wishList?.productMovements?.map((x) => x.product)

  let characteristics: Characteristic[] = [];
  products?.map((p) => p.characteristics.map((x) => {
    if(!characteristics.find(y => y.nameEng == x.nameEng))
      characteristics.push(x)
  }))
  
  return(
    <div className="bg-customGray pb-12">
      <Container>
        <div className="pt-8 pb-8">
          <div className="p-8 bg-white rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/wishList">Сохраненные товары</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Список сохраненных товаров</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 relative">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Название</TableHead>
                {characteristics.map((characteristic) => (
                  <TableHead key={characteristic.nameEng}>{characteristic.name}</TableHead>
                ))}
                <TableHead>Цена</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img className="w-[40px]" src="/Images/placeholder.png"/>
                  </TableCell>
                  <TableCell>
                    <Link href={`../product/${product.id}`} className="flex gap-4 font-medium hover:text-customBlue">
                      <div>{product.title}</div>
                    </Link>
                  </TableCell>
                  {characteristics.map((x) => {
                    let c = product.characteristics.find(f => f.nameEng === x.nameEng)

                    if (c)
                      return <TableCell key={x.nameEng}>{c.value}</TableCell>

                    return <TableCell key={x.nameEng}>--</TableCell>
                  })}
                  {(product?.price ?? 0) > 0 &&
                      <TableCell>{product.price}</TableCell>
                  }
                  {(product?.price ?? 0) <= 0 &&
                      <TableCell>--</TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </div>
  )
}