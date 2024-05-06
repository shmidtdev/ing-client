"use client"

type ProductPaginationProps = {
  pagesAmount: number,
}

export default function ProductPagination({pagesAmount} : ProductPaginationProps){
  return (
    <div className="w-full flex justify-center gap-3 mt-12">
      <div>
        Назад
      </div>
      {Array.from({length: pagesAmount}).map((_, index) => (
        <div key={index + 1}>
          {index + 1}
        </div>
      ))}
      <div>
        Вперед
      </div>
    </div>
  )
}