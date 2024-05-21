'use client'

import { ProductWithQuantity } from '@/types'
import { ICartContext } from '@/types/cart-context'
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext<ICartContext | null>(null)

// Functional Component
export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<ProductWithQuantity[]>([])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  // Rendering
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
