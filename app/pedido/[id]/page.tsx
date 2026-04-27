import { Metadata } from 'next'
import { OrderConfirmation } from './order-confirmation'

export const metadata: Metadata = {
  title: 'Pedido Confirmado',
  description: 'Seu pedido foi realizado com sucesso',
}

interface OrderPageProps {
  params: Promise<{ id: string }>
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { id } = await params
  
  return <OrderConfirmation orderId={id} />
}
