"use server"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Container from "@/components/Container";
import FiltersSection from "@/components/sections/FiltersSection";
import ProductsSection from "@/components/sections/ProductsSection";
import axios from "axios";
import {host} from "@/env";
import ProductOrderSelect from "@/components/ProductOrderSelect";

export default async function CatalogSlug({params, searchParams}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}){
  let products : Product[] = [];
  let characteristics: Characteristic[] = [];
  let categories: Category[] = [];
  let currentCategory: Category;
  let pages: number = 0;
  let maxPrice = 0;

  await axios.get(`${host}/catalog/getCatalog?categoryName=catalog`).then(res => {
    products = res.data.products;
    characteristics = res.data.characteristics;
    categories = res.data.categories;
    currentCategory = res.data.currentCategory;
    pages = res.data.pages;
    maxPrice = res.data.maxPrice;
  });
  
  return (
    <div className="mb-20">
      <Container>
        <div className="mt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator/>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator/>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h2 className="text-4xl font-medium my-8">
          {currentCategory?.name ?? "Каталог товаров"}
        </h2>
        <div className="mb-6 w-full">
          <ProductOrderSelect/>
        </div>
        <div className="flex justify-between gap-20">
          <FiltersSection characteristics={characteristics} categories={categories} maxPrice={maxPrice}/>
          {pages > 1 && <ProductsSection products={products} pages={pages}/>}
        </div>
      </Container>
    </div>
  )
}