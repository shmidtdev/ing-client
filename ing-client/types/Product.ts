type Product = {
  id: string,
  title: string,
  titleEng: string,
  images?: string[],
  price?: number,
  oldPrice?: number,
  isRecommended: boolean,
  category: string,
  rating?: number,
  characteristics: Characteristic[]
}