export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  category: string
  images: string[]
  inStock: boolean
  condition?: 'new' | 'used'
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface OrderAddress {
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

export interface Order {
  id: string
  items: CartItem[]
  address: OrderAddress
  total: number
  status: 'pending' | 'paid' | 'shipped' | 'delivered'
  trackingCode?: string
  createdAt: Date
  paidAt?: Date
}

export const CATEGORIES = [
  { id: 'bicicletas-novas', name: 'Bicicletas Novas', icon: 'bike' },
  { id: 'bicicletas-seminovas', name: 'Bicicletas Semi-novas', icon: 'bike' },
  { id: 'adesivos', name: 'Adesivos Personalizados', icon: 'sticker' },
  { id: 'capacetes', name: 'Capacetes', icon: 'helmet' },
  { id: 'pneus-camaras', name: 'Pneus e Câmaras', icon: 'tire' },
  { id: 'bancos-selins', name: 'Bancos e Selins', icon: 'seat' },
  { id: 'manoplas-moto', name: 'Manoplas para Moto', icon: 'grip' },
  { id: 'acessorios', name: 'Acessórios', icon: 'accessory' },
] as const
