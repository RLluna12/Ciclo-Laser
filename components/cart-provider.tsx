'use client'

import { useState, useCallback, useEffect, ReactNode } from 'react'
import { CartContext, CartState } from '@/lib/cart-store'
import { Product, OrderAddress } from '@/lib/types'

const CART_STORAGE_KEY = 'ciclo-laser-cart'

function getInitialCart(): CartState {
  if (typeof window === 'undefined') {
    return { items: [], address: null }
  }
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch {
    // Ignore errors
  }
  return { items: [], address: null }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>({ items: [], address: null })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setCart(getInitialCart())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    }
  }, [cart, mounted])

  const addItem = useCallback((product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.items.find((item) => item.product.id === product.id)
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }
      return {
        ...prev,
        items: [...prev.items, { product, quantity }],
      }
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.product.id !== productId),
    }))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }))
  }, [removeItem])

  const clearCart = useCallback(() => {
    setCart({ items: [], address: null })
  }, [])

  const setAddress = useCallback((address: OrderAddress) => {
    setCart((prev) => ({ ...prev, address }))
  }, [])

  const getTotal = useCallback(() => {
    return cart.items.reduce(
      (sum, item) => sum + item.product.priceInCents * item.quantity,
      0
    )
  }, [cart.items])

  const getItemCount = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0)
  }, [cart.items])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setAddress,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
