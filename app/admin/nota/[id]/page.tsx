'use client'

import { useEffect, useState, useRef } from 'react'
import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Printer, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Order {
  id: string
  items: Array<{
    product: { id: string; name: string; priceInCents: number }
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
  status: 'pending' | 'paid' | 'shipped' | 'delivered'
  trackingCode?: string
  createdAt: string
}

export default function InvoicePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [order, setOrder] = useState<Order | null>(null)
  const printRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('ciclo-laser-orders') || '[]')
    const found = orders.find((o: Order) => o.id === id)
    setOrder(found || null)
  }, [id])

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(cents / 100)
  }

  const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(dateStr))
  }

  const handlePrint = () => {
    window.print()
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Pedido não encontrado</h1>
        <Button asChild>
          <Link href="/admin">Voltar para o Admin</Link>
        </Button>
      </div>
    )
  }

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.product.priceInCents * item.quantity,
    0
  )
  const shipping = order.total - subtotal

  return (
    <div>
      {/* Controles (não imprime) */}
      <div className="print:hidden container mx-auto px-4 py-4 flex items-center justify-between border-b">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/admin/pedido/${order.id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Nota para impressão */}
      <div
        ref={printRef}
        className="max-w-[210mm] mx-auto bg-white p-8 print:p-6 print:shadow-none shadow-lg my-8 print:my-0"
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between border-b pb-6 mb-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Ciclo Laser"
              width={120}
              height={60}
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold">Ciclo Laser Bicicletaria</h1>
              <p className="text-sm text-gray-600">
                CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">NOTA DE PEDIDO</p>
            <p className="text-sm text-gray-600">#{order.id}</p>
            <p className="text-sm text-gray-600">
              Data: {formatDate(order.createdAt)}
            </p>
          </div>
        </div>

        {/* Informações da loja */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="font-semibold text-sm text-gray-500 mb-2">REMETENTE</h2>
            <div className="text-sm">
              <p className="font-medium">Ciclo Laser Bicicletaria</p>
              <p>Avenida Barão de Mauá, 3126</p>
              <p>Jardim Maringá, Mauá - SP</p>
              <p>CEP: 09340-440</p>
              <p className="mt-2">Tel: (11) 4578-3995</p>
              <p>WhatsApp: (11) 93434-0613</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm text-gray-500 mb-2">DESTINATÁRIO</h2>
            <div className="text-sm">
              <p className="font-medium">{order.address.name}</p>
              <p>
                {order.address.street}, {order.address.number}
                {order.address.complement && ` - ${order.address.complement}`}
              </p>
              <p>{order.address.neighborhood}</p>
              <p>
                {order.address.city} - {order.address.state}
              </p>
              <p>CEP: {order.address.zipCode}</p>
              <p className="mt-2">Tel: {order.address.phone}</p>
              <p>E-mail: {order.address.email}</p>
            </div>
          </div>
        </div>

        {/* Itens do pedido */}
        <div className="mb-8">
          <h2 className="font-semibold text-sm text-gray-500 mb-3">ITENS DO PEDIDO</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 font-semibold">Produto</th>
                <th className="text-center py-2 font-semibold w-20">Qtd.</th>
                <th className="text-right py-2 font-semibold w-28">Unit.</th>
                <th className="text-right py-2 font-semibold w-28">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={item.product.id} className="border-b border-gray-200">
                  <td className="py-3">
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-xs text-gray-500">Cód: {item.product.id}</p>
                  </td>
                  <td className="text-center py-3">{item.quantity}</td>
                  <td className="text-right py-3">
                    {formatPrice(item.product.priceInCents)}
                  </td>
                  <td className="text-right py-3 font-medium">
                    {formatPrice(item.product.priceInCents * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totais */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2 text-sm">
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span>Frete:</span>
              <span>
                {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-t border-gray-300 font-bold text-lg">
              <span>TOTAL:</span>
              <span className="text-primary">{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Código de rastreio */}
        {order.trackingCode && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="font-semibold text-sm text-gray-500 mb-2">
              CÓDIGO DE RASTREIO
            </h2>
            <p className="text-xl font-mono font-bold">{order.trackingCode}</p>
            <p className="text-sm text-gray-600 mt-1">
              Rastreie em: www.correios.com.br
            </p>
          </div>
        )}

        {/* Observações */}
        <div className="mb-8">
          <h2 className="font-semibold text-sm text-gray-500 mb-2">OBSERVAÇÕES</h2>
          <div className="border border-dashed border-gray-300 rounded p-4 min-h-[60px]">
            <p className="text-sm text-gray-400">
              Espaço para anotações manuais...
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t pt-6 text-center text-sm text-gray-500">
          <p className="font-medium">Obrigado pela sua compra!</p>
          <p className="mt-1">
            Ciclo Laser Bicicletaria - 38 anos de tradição e confiança
          </p>
          <p className="mt-1">
            Av. Barão de Mauá, 3126 - Jardim Maringá, Mauá - SP | Tel: (11) 4578-3995 | WhatsApp: (11) 93434-0613
          </p>
        </div>

        {/* Linha de corte para destacar */}
        <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-300">
          <p className="text-center text-xs text-gray-400">
            ✂ Recorte aqui - Via do cliente
          </p>
        </div>

        {/* Mini comprovante para o cliente */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold">COMPROVANTE DE COMPRA</p>
              <p className="text-sm">Pedido #{order.id}</p>
            </div>
            <div className="text-right text-sm">
              <p>{formatDate(order.createdAt)}</p>
            </div>
          </div>
          <div className="text-sm mb-3">
            <p><strong>Cliente:</strong> {order.address.name}</p>
            <p><strong>Total:</strong> {formatPrice(order.total)}</p>
            {order.trackingCode && (
              <p><strong>Rastreio:</strong> {order.trackingCode}</p>
            )}
          </div>
          <div className="text-xs text-gray-500">
            <p>Dúvidas? WhatsApp: (11) 93434-0613</p>
          </div>
        </div>
      </div>

      {/* CSS de impressão */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          #__next > div > div:last-child,
          #__next > div > div:last-child * {
            visibility: visible;
          }
          #__next > div > div:last-child {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            size: A4;
            margin: 10mm;
          }
        }
      `}</style>
    </div>
  )
}
