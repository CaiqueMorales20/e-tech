import { IAddToCart } from '@/types'

function decreaseQuantity({ product, setState }: IAddToCart) {
  setState((prev) => {
    const newArray = prev.map((prevProduct) => {
      if (prevProduct.id === product.id) {
        return { ...prevProduct, quantity: prevProduct.quantity - 1 }
      } else {
        return prevProduct
      }
    })

    const filteredArray = newArray.filter(
      (prevProduct) => prevProduct.quantity > 0,
    )
    console.log('teste')
    return filteredArray
  })
}

export { decreaseQuantity }
