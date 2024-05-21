import { IAddToCart } from '@/types'

function addToCart({ product, setState }: IAddToCart) {
  setState((prev) => {
    const existsInCarts = prev.some(
      (prevProduct) => prevProduct.id === product.id,
    )
    if (existsInCarts) {
      return prev.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return { ...prevProduct, quantity: prevProduct.quantity + 1 }
        } else {
          return prevProduct
        }
      })
    }

    return [...prev, { ...product, quantity: 1 }]
  })
}

export { addToCart }
