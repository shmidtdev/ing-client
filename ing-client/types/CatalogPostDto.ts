type CatalogPostDto = {
  categoryName: string,
  params: {key: string, value: string}[],
  priceMin?: string,
  priceMax?: string,
  page: string
}