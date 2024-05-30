import axios from "axios";
import {host} from "@/env";
import Link from "next/link";
import Container from "@/components/Container";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Filter} from "lucide-react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import ProductPagination from "@/components/ProductPagination";
import * as sea from "node:sea";
import {NoImageIcon} from "@/Icons";

export default async function Search({params, searchParams}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let products: Product[] = []
  let pages: number = 0

  await axios.get(`${host}/api/product/GetProductsBySubstring?substring=${searchParams["substring"]}&page=${searchParams["page"]}`)
    .then(res => {
      products = res.data.products
      pages = res.data.pages
    })
  
  let characteristics: Characteristic[] = []; 
  products.map((p) => p.characteristics.map((x) => {
    if(!characteristics.find(y => y.nameEng == x.nameEng))
      characteristics.push(x)
  }))
  
  return (
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
                  <BreadcrumbLink href="/">Поиск</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Поиск товаров</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 relative">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Название</TableHead>
                {characteristics.map((characteristic) => (
                  <TableHead key={characteristic.id}>{characteristic.name}</TableHead>
                ))}
                <TableHead>Цена</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.images.length > 0 && 
                      <img className="w-[40px]" src={`${host}/storage/${product.images[0].link}`}/>
                    }
                    {product.images.length == 0 && 
                        <div className="w-[40px] object-contain">
                          <NoImageIcon/>
                        </div>
                    }
                  </TableCell>
                  <TableCell>
                    <Link href={`../product/${product.id}`} className="flex gap-4 font-medium hover:text-customBlue">
                      <div >{product.title}</div>
                    </Link>
                  </TableCell>
                  {characteristics.map((x) => {
                    let c = product.characteristics.find(f => f.nameEng === x.nameEng)
                    
                    if (c)
                      return <TableCell key={x.id}>{c.value}</TableCell>
                    
                    return <TableCell key={x.id}>--</TableCell>
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
          <ProductPagination pagesAmount={pages} />
        </div>
      </Container>
    </div>
  )
}