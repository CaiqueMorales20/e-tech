import Image from 'next/image'
import { ProductWithPrice } from '@/types/index'
import { convertCurrency } from '@/utils/convert-currency'
import Link from 'next/link'

// Functional Component
export default function Product({
  id,
  name,
  description,
  images,
  price,
}: ProductWithPrice) {
  // Rendering
  return (
    <Link className="cursor-pointer" href={`/products/${id}`}>
      <div className="flex flex-col items-center gap-6 rounded-lg bg-third p-6">
        <Image
          src={images[0]}
          className="aspect-video h-[240px] w-full"
          width={400}
          height={400}
          alt={name}
        />
        <div>
          <h2 className="mb-4 font-bold text-white">{name}</h2>
          <p className="mb-6 text-white/60">{description}</p>
          <p className="text-white/90">{convertCurrency(price.unit_amount!)}</p>
        </div>
      </div>
    </Link>
  )
}
