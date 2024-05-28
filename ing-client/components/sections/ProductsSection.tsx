import ProductCard from "@/components/ProductCard";
import ProductPagination from "@/components/ProductPagination";
import ProductOrderSelect from "@/components/ProductOrderSelect";
import {Suspense} from "react";

type ProductsSectionProps = {
  products: Product[],
  pages: number
}

export default function ProductsSection({products, pages} : ProductsSectionProps){
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="">
        <div className="mb-6 w-full">
          <Suspense>
            <ProductOrderSelect/>
          </Suspense>
        </div>
        <div className="w-fit flex flex-wrap justify-between gap-6">
          {products.map((product) => (
            <div className="w-[260px]" key={product.id}>
              <ProductCard product={product}/>
            </div>
          ))}
        </div>
        <Suspense>
          <ProductPagination pagesAmount={pages}/>
        </Suspense>
      </div>
    </div>
  )
}