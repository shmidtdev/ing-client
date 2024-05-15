type CatalogPageContextDto = {
  characteristics: Characteristic[],
  products: Product[],
  categories: Category[],
  currentCategory: Category,
  breadCrumbs: BreadCrumb[],
  pages: number,
  maxPrice: number
}