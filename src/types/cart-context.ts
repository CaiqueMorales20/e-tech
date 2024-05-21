import React, { SetStateAction } from 'react'
import { ProductWithQuantity } from './add-to-cart'

type ICartContext = {
  cart: ProductWithQuantity[]
  setCart: React.Dispatch<SetStateAction<ProductWithQuantity[]>>
}

export type { ICartContext }
