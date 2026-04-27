'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function CartContent() {
  const { cart, removeItem, updateQuantity, getTotal } = useCart()

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-20 w-20 text-muted-foreground mb-6" />
        <h2 className="text-2xl font-semibold mb-2">Seu carrinho está vazio</h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          Parece que você ainda não adicionou nenhum produto ao carrinho.
          Explore nossa loja e encontre o que precisa!
        </p>
        <Button size="lg" asChild>
          <Link href="/produtos">
            Ver Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    )
  }

  const total = getTotal()
  const shipping = total >= 30000 ? 0 : 2500 // Frete grátis acima de R$300

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Lista de itens */}
      <div className="lg:col-span-2 space-y-4">
        {cart.items.map((item) => (
          <Card key={item.product.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={item.product.images[0] || '/images/placeholder-product.jpg'}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/produto/${item.product.id}`}
                    className="font-semibold hover:text-primary line-clamp-1"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                    {item.product.description}
                  </p>
                  <p className="font-bold text-primary mt-2">
                    {formatPrice(item.product.priceInCents)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resumo */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Frete</span>
              <span>
                {shipping === 0 ? (
                  <span className="text-green-600">Grátis</span>
                ) : (
                  formatPrice(shipping)
                )}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-muted-foreground">
                Frete grátis para compras acima de R$ 300,00
              </p>
            )}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total + shipping)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                ou 3x de {formatPrice(Math.ceil((total + shipping) / 3))} sem juros
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">
                Finalizar Compra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
