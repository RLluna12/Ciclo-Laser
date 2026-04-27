'use client'

import { useEffect, useState } from 'react'
import { use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Package,
  User,
  MapPin,
  Phone,
  Mail,
  FileText,
  Truck,
  CheckCircle,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

const statusConfig = {
  pending: { label: 'Pendente', variant: 'secondary' as const, icon: Clock },
  paid: { label: 'Pago', variant: 'default' as const, icon: CheckCircle },
  shipped: { label: 'Enviado', variant: 'default' as const, icon: Truck },
  delivered: { label: 'Entregue', variant: 'default' as const, icon: Package },
}

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [trackingCode, setTrackingCode] = useState('')
  const [status, setStatus] = useState<Order['status']>('pending')

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('ciclo-laser-orders') || '[]')
    const found = orders.find((o: Order) => o.id === id)
    if (found) {
      setOrder(found)
      setStatus(found.status)
      setTrackingCode(found.trackingCode || '')
    }
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
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateStr))
  }

  const handleSave = () => {
    const orders = JSON.parse(localStorage.getItem('ciclo-laser-orders') || '[]')
    const updatedOrders = orders.map((o: Order) =>
      o.id === id ? { ...o, status, trackingCode } : o
    )
    localStorage.setItem('ciclo-laser-orders', JSON.stringify(updatedOrders))
    router.push('/admin')
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

  const statusInfo = statusConfig[order.status]
  const StatusIcon = statusInfo.icon

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/admin">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Pedidos
        </Link>
      </Button>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Pedido #{order.id}</h1>
          <p className="text-muted-foreground">
            Realizado em {formatDate(order.createdAt)}
          </p>
        </div>
        <Badge variant={statusInfo.variant} className="gap-1 text-sm px-3 py-1">
          <StatusIcon className="h-4 w-4" />
          {statusInfo.label}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Cliente */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Dados do Cliente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">{order.address.name}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${order.address.email}`} className="hover:underline">
                {order.address.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href={`tel:${order.address.phone}`} className="hover:underline">
                {order.address.phone}
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Endereço */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Endereço de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              {order.address.street}, {order.address.number}
              {order.address.complement && ` - ${order.address.complement}`}
              <br />
              {order.address.neighborhood}
              <br />
              {order.address.city} - {order.address.state}
              <br />
              CEP: {order.address.zipCode}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Itens */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Itens do Pedido
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between items-center py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Quantidade: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  {formatPrice(item.product.priceInCents * item.quantity)}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <p className="text-lg font-bold">Total</p>
            <p className="text-xl font-bold text-primary">
              {formatPrice(order.total)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Atualizar Status */}
      <Card>
        <CardHeader>
          <CardTitle>Atualizar Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel>Status do Pedido</FieldLabel>
              <Select
                value={status}
                onValueChange={(value: Order['status']) => setStatus(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="paid">Pago</SelectItem>
                  <SelectItem value="shipped">Enviado</SelectItem>
                  <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>Código de Rastreio</FieldLabel>
              <Input
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Ex: AA123456789BR"
              />
            </Field>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleSave}>Salvar Alterações</Button>
            <Button variant="outline" asChild>
              <Link href={`/admin/nota/${order.id}`}>
                <FileText className="h-4 w-4 mr-2" />
                Gerar Nota
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
