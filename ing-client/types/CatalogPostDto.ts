type CatalogPostDto = {
  categoryName: string,
  params: {key: string, value: string}[],
  minPrice?: string,
  maxPrice?: string,
  page: string
}