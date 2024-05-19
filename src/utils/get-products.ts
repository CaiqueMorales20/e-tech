import { stripe } from '@/stripe'

async function getProducts() {
  const products = await stripe.products.list()

  const productsWithPrice = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.retrieve(
        product.default_price as string,
      )
      return { ...product, price }
    }),
  )
  return productsWithPrice
}

export { getProducts }
