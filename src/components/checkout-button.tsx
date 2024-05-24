'use client'

import { useCartContext } from '@/context/use-cart'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'

// Functional Component
export default function CheckoutButton() {
  const [modal, setModal] = useState<boolean>(false)
  const { cart } = useCartContext()

  const baseVariant = ''
  const openVariant = 'opacity-100 z-50 bg-primary/60 block'

  console.log(process.env.STRIPE_PUBLIC_KEY)
  const stripePromise = loadStripe(
    'pk_test_51PICB5P7DQdNBFh8RPwL9hOh8bHM7u0fQle7pMZVmdIjI8ULBKWLww55uNzAHMGaZBoDHes1DqDwUYXOdcBlIbrt00wFCCXL2D',
  )

  const fetchClientSecret = useCallback(() => {
    return fetch('api/embedded-checkout', {
      method: 'POST',
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret)
  }, [cart])

  const options = { fetchClientSecret }

  // Rendering
  return (
    <>
      <button onClick={() => setModal(!modal)}>send to checkout</button>
      <div className={twMerge(baseVariant, modal && openVariant)}>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </>
  )
}
