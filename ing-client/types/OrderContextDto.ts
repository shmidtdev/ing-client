type OrderContextDto = {
  orderContextItems: OrderContextItem[],
  totalSum: number
}

type OrderCommitDto = {
  orderCommitItems: OrderCommitItem[],
}

type OrderCommitItem = {
  id: string,
  amountOfElements: number
}