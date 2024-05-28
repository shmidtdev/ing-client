"use server"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Container from "@/components/Container";
import FiltersSection from "@/components/sections/FiltersSection";
import ProductsSection from "@/components/sections/ProductsSection";
import axios from "axios";
import {host} from "@/env";

export default async function CatalogPage({params, searchParams}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}){
  let dto : CatalogPageContextDto;

  let products : Product[] = [];
  let characteristics: Characteristic[] = [];
  let categories: Category[] = [];
  let pages: number = 0;
  let maxPrice = 0;
  let breadCrumbs: BreadCrumb[] = []

  let currentCategory: Category = {
    id: "",
    name: "",
    nameEng: "",
    imageLink: "",
    amount: 0
  };

  let postDto: CatalogPostDto = {
    page: searchParams["page"]?.toString() ?? "1",
    // @ts-ignore
    params: searchParams,
    categoryName: params.slug,
    priceMax: searchParams["priceMax"]?.toString(),
    priceMin: searchParams["priceMin"]?.toString()
  }

  await axios.post(`${host}/api/catalog/getCatalog`, postDto)
    .then(res => dto = res.data)
    .then(() => {
      if (dto !== undefined){
        products = dto.products;
        characteristics = dto.characteristics;
        categories = dto.categories;
        currentCategory = dto.currentCategory;
        pages = dto.pages;
        maxPrice = dto.maxPrice;
        breadCrumbs = dto.breadCrumbs;
      }
    });

  return (
    <div className="pb-20 bg-customGray">
      <div className="pt-8">
        <Container>
          <div className="p-8 bg-white rounded-lg">
            <div className="">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                  {breadCrumbs.reverse().map((breadCrumb, index) => {
                    if (index === breadCrumbs.length - 1){
                      return (
                        <>
                          <BreadcrumbItem>
                            <BreadcrumbLink href={`../${breadCrumb.slug}`}>{breadCrumb.name}</BreadcrumbLink>
                          </BreadcrumbItem>
                        </>
                      )
                    }
                    else {
                      return (
                        <>
                          <BreadcrumbItem>
                            <BreadcrumbLink href={`../${breadCrumb.slug}`}>{breadCrumb.name}</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator/>
                        </>
                      )
                    }
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <h2 className="text-4xl font-medium mt-4">
              {currentCategory?.name ?? "Каталог товаров"}
            </h2>
          </div>
          <div className="flex justify-between gap-20 w-full mt-8">
            <FiltersSection characteristics={characteristics} categories={categories} maxPrice={maxPrice}/>
            {pages > 0 && <ProductsSection products={products} pages={pages}/>}
          </div>
        </Container>
      </div>
    </div>
  )
}