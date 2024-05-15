import ProductCard from "@/components/ProductCard";
import ProductPagination from "@/components/ProductPagination";
import ProductOrderSelect from "@/components/ProductOrderSelect";

type ProductsSectionProps = {
  products: Product[],
  pages: number
}

export default function ProductsSection({products, pages} : ProductsSectionProps){
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="">
        <div className="mb-6 w-full">
          <ProductOrderSelect/>
        </div>
        <div className="w-fit flex flex-wrap justify-between gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
        <ProductPagination pagesAmount={pages}/>
      </div>
    </div>
  )
}