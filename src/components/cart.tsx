'use client'

import { useCartContext } from '@/context/use-cart'
import { ProductWithQuantity } from '@/types'
import { addToCart } from '@/utils/add-to-cart'
import { decreaseQuantity } from '@/utils/decrease-quantity'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import CheckoutButton from './checkout-button'

const CartItem = (product: ProductWithQuantity) => {
  const { setCart } = useCartContext()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="aspect-square h-[80px] w-[80px]"
          width={80}
          height={80}
        />
        <h3 className="font-bold text-white">{product.name}</h3>
      </div>
      <div className="flex gap-2">
        <button
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-black text-white"
          onClick={() => decreaseQuantity({ product, setState: setCart })}
        >
          -
        </button>
        <span className="text-lg font-bold text-white">{product.quantity}</span>
        <button
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-black text-white"
          onClick={() => addToCart({ product, setState: setCart })}
        >
          +
        </button>
      </div>
    </div>
  )
}

// Functional Component
export default function Cart() {
  const { cart } = useCartContext()
  const [cartOpened, setCartOpened] = useState<boolean>(false)

  const modalBaseVariant =
    'absolute top-[110%] w-[300px] max-w-[90vw] flex flex-col gap-4 translate-x-[-100%] rounded-lg mt-4 ml-[24px] bg-third z-1 opacity-0 p-6'
  const openedVariant = 'opacity-100 z-50'

  function handleOpen() {
    if (cart.length) setCartOpened(!cartOpened)
  }

  // Rendering
  return (
    <div className="relative">
      <ShoppingCart
        onClick={() => handleOpen()}
        className="cursor-pointer text-white"
      />
      <div className="pointer-events-none absolute right-[-10px] top-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-primary">
        {cart.length}
      </div>
      <div className={twMerge(modalBaseVariant, cartOpened && openedVariant)}>
        {cart.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
        <CheckoutButton />
      </div>
    </div>
  )
}
