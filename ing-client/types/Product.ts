type Product = {
  id: string,
  title: string,
  titleEng: string,
  images?: any,
  price?: number,
  oldPrice?: number,
  isRecommended: boolean,
  category: string,
  rating?: number,
  characteristics: Characteristic[]
}