import { Metadata } from 'next'
import { CartContent } from './cart-content'

export const metadata: Metadata = {
  title: 'Carrinho',
  description: 'Revise os itens do seu carrinho de compras',
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>
      <CartContent />
    </div>
  )
}
