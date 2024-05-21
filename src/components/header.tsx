'use client'

import { useCartContext } from '@/context/use-cart'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

// Functional Component
export default function Header() {
  const { cart } = useCartContext()

  console.log(cart)

  // Rendering
  return (
    <header className="flex h-20 w-screen items-center justify-between bg-secondary px-[5%]">
      <Link href={'/products'} className="text-white">
        E-tech
      </Link>
      <div className="relative">
        <ShoppingCart className="text-white" />
        <div className="absolute right-[-10px] top-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-primary">
          {cart.length}
        </div>
      </div>
    </header>
  )
}
