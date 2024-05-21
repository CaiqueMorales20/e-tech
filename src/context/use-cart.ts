'use client'

import { ICartContext } from '@/types/cart-context'
import { useContext } from 'react'
import { CartContext } from './provider'

export const useCartContext = () => useContext(CartContext) as ICartContext
