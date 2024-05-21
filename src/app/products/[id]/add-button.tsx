'use client'

import { useCartContext } from '@/context/use-cart'
import { ProductWithPrice } from '@/types'
import { addToCart } from '@/utils/add-to-cart'

// Functional Component
export default function AddButton({ product }: { product: ProductWithPrice }) {
  const { setCart } = useCartContext()

  // Rendering
  return (
    <button
      onClick={() => addToCart({ product, setState: setCart })}
      className="h-max rounded-lg bg-white px-4 py-2 text-primary"
    >
      Add to cart
    </button>
  )
}
