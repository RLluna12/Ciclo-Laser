import { Metadata } from 'next'
import { CheckoutContent } from './checkout-content'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Finalize sua compra',
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      <CheckoutContent />
    </div>
  )
}
