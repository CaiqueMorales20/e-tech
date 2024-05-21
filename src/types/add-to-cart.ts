import { SetStateAction } from 'react'
import { ProductWithPrice } from './product'

type ProductWithQuantity = ProductWithPrice & { quantity: number }

type IAddToCart = {
  product: ProductWithPrice
  setState: React.Dispatch<SetStateAction<ProductWithQuantity[]>>
}

export type { IAddToCart, ProductWithQuantity }
