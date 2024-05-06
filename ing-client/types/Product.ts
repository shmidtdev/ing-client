type Product = {
  id: string,
  title: string,
  titleEng: string,
  imageLink?: string[],
  price?: number,
  oldPrice?: number,
  isRecommended: boolean,
  category: string,
  rating?: number,
  characteristics: Characteristic[]
}