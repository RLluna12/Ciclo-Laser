'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Order {
  id: string
  items: Array<{
    product: {
      id: string
      name: string
      priceInCents: number
    }
    quantity: number
  }>
  address: {
    name: string
    email: string
    phone: string
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
  total: number
  status: string
  createdAt: string
}

export function OrderConfirmation({ orderId }: { orderId: string }) {
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('ciclo-laser-orders') || '[]')
    const found = orders.find((o: Order) => o.id === orderId)
    setOrder(found || null)
  }, [orderId])

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Pedido não encontrado</h1>
        <p className="text-muted-foreground mb-6">
          Não conseguimos encontrar este pedido. Verifique o número ou entre em contato conosco.
        </p>
        <Button asChild>
          <Link href="/">Voltar para o Início</Link>
        </Button>
      </div>
    )
  }

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(cents / 100)
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Pedido Confirmado!</h1>
        <p className="text-muted-foreground">
          Obrigado pela sua compra. Seu pedido foi registrado com sucesso.
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Pedido #{order.id}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Itens do Pedido</h3>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-medium">
                    {formatPrice(item.product.priceInCents * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold mt-4 pt-4 border-t">
              <span>Total</span>
              <span className="text-primary">{formatPrice(order.total)}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Endereço de Entrega</h3>
            <p className="text-sm text-muted-foreground">
              {order.address.name}<br />
              {order.address.street}, {order.address.number}
              {order.address.complement && ` - ${order.address.complement}`}<br />
              {order.address.neighborhood}, {order.address.city} - {order.address.state}<br />
              CEP: {order.address.zipCode}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6 border-primary">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Próximos Passos</h3>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>
                Entraremos em contato via WhatsApp ou telefone para confirmar o pedido e combinar o pagamento.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>
                Após a confirmação do pagamento, prepararemos seu pedido para envio.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>
                Você receberá o código de rastreio dos Correios por e-mail e WhatsApp.
              </span>
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1" asChild>
          <a
            href={`https://wa.me/5511934340613?text=Olá! Fiz o pedido ${order.id} no site e gostaria de confirmar.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </a>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <a href="tel:1145783995">
            <Phone className="mr-2 h-4 w-4" />
            Ligar para a Loja
          </a>
        </Button>
      </div>

      <div className="text-center mt-8">
        <Button variant="link" asChild>
          <Link href="/produtos">
            Continuar Comprando
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
