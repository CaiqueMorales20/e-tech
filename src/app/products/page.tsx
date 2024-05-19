import { getProducts } from '@/utils/get-products'
import Product from './product'

// Functional Component
export default async function Products() {
  const products = await getProducts()

  // Rendering
  return (
    <div className="mx-auto mt-20 flex w-[90%] gap-6">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
