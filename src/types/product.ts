import Stripe from 'stripe'

type ProductWithPrice = {
  price: Stripe.Price
} & Stripe.Product

export { ProductWithPrice }
