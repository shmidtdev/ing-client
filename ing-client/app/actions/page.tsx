import axios from "axios";
import {host} from "@/env";
import Link from "next/link";
import Container from "@/components/Container";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Filter} from "lucide-react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import {Pagination} from "@nextui-org/pagination";
import ProductPagination from "@/components/ProductPagination";
import {NoImageIcon} from "@/Icons";

export default async function Search({params, searchParams}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let dto : CatalogPageContextDto;

  let products : Product[] = [];
  let characteristics: Characteristic[] = [];
  let pages: number = 0;
  
  let postDto: CatalogPostDto = {
    page: searchParams["page"]?.toString() ?? "1",
    // @ts-ignore
    params: searchParams,
    categoryName: "catalog",
    priceMax: searchParams["priceMax"]?.toString(),
    priceMin: searchParams["priceMin"]?.toString()
  }

  await axios.post(`${host}/api/catalog/getactions`, postDto)
    .then(res => dto = res.data)
    .then(() => {
      if (dto !== undefined){
        products = dto.products;
        characteristics = dto.characteristics;
        pages = dto.pages;
      }
    });

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
                  <BreadcrumbLink href="/">Акции и скидки</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Акции и скидки</h2>
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
                <TableHead>Старая цена</TableHead>
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
                      <>
                        <TableCell className="line-through">{product.oldPrice} руб.</TableCell>
                        <TableCell>{product.price} руб.</TableCell>
                      </>
                  }
                  {(product?.price ?? 0) <= 0 &&
                      <TableCell>--</TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>
            <ProductPagination pagesAmount={pages} />
          </div>
        </div>
      </Container>
    </div>
  )
}