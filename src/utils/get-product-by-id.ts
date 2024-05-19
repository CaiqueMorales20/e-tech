import { stripe } from '@/stripe'

async function getProductById(id: string) {
  const product = await stripe.products.retrieve(id)

  const price = await stripe.prices.retrieve(product.default_price as string)

  const productWithPrice = { ...product, price }

  return productWithPrice
}

export { getProductById }
