'use client'

import { createContext, useContext } from 'react'
import { Product, CartItem, OrderAddress } from './types'

export interface CartState {
  items: CartItem[]
  address: OrderAddress | null
}

export interface CartContextType {
  cart: CartState
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  setAddress: (address: OrderAddress) => void
  getTotal: () => number
  getItemCount: () => number
}

export const CartContext = createContext<CartContextType | null>(null)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
