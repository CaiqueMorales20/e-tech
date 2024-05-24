import Link from 'next/link'
import Cart from './cart'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="flex h-20 w-screen items-center justify-between bg-secondary px-[5%]">
      <Link href={'/products'} className="text-white">
        E-tech
      </Link>
      <Cart />
    </header>
  )
}
