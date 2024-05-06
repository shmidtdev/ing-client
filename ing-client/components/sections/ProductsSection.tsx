import ProductCard from "@/components/ProductCard";
import ProductPagination from "@/components/ProductPagination";

type ProductsSectionProps = {
  products: Product[],
  pages: number
}

export default function ProductsSection({products, pages} : ProductsSectionProps){
  return (
    <div className="">
      <div className="flex flex-wrap justify-between gap-x-20 gap-y-6">
        {products.map((product) => (
          <ProductCard key={product.titleEng} product={product}/>
        ))}
      </div>
      <ProductPagination pagesAmount={pages} />
    </div>
  )
}