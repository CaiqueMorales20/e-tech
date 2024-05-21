import Image from 'next/image'
import { convertCurrency } from '@/utils/convert-currency'
import { getProductById } from '@/utils/get-product-by-id'
import AddButton from './add-button'

// Functional Component
export default async function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  // Variables
  const product = await getProductById(id)

  // Rendering
  return (
    <div className="mt-20 flex items-center justify-center gap-6">
      <div className="flex max-w-[400px] flex-col items-center gap-6 rounded-lg bg-third p-6">
        <Image
          src={product.images[0]}
          className="aspect-video h-[240px] w-full"
          width={400}
          height={400}
          alt={product.name}
        />
        <div>
          <h2 className="mb-4 font-bold text-white">{product.name}</h2>
          <p className="mb-6 text-white/60">{product.description}</p>
          <p className="text-white/90">
            {convertCurrency(product.price.unit_amount!)}
          </p>
        </div>
      </div>
      <AddButton product={product} />
    </div>
  )
}
