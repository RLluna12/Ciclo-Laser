'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Minus, Plus, Truck, Shield, ArrowLeft } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ProductCard } from '@/components/product-card'

interface ProductDetailsProps {
  product: Product
  category?: { id: string; name: string; icon: string }
  relatedProducts: Product[]
}

export function ProductDetails({
  product,
  category,
  relatedProducts,
}: ProductDetailsProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Início
        </Link>
        <span>/</span>
        <Link href="/produtos" className="hover:text-foreground">
          Produtos
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link
              href={`/produtos?categoria=${category.id}`}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
      </nav>

      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/produtos">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Produtos
        </Link>
      </Button>

      {/* Produto */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Imagem */}
        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
          <Image
            src={product.images[0] || '/images/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.condition === 'used' && (
            <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600">
              Semi-nova
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-6 py-2">
                Produto Esgotado
              </Badge>
            </div>
          )}
        </div>

        {/* Informações */}
        <div>
          {category && (
            <Link
              href={`/produtos?categoria=${category.id}`}
              className="text-sm text-primary hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>

          <div className="mb-6">
            <p className="text-4xl font-bold text-primary">
              {formatPrice(product.priceInCents)}
            </p>
            <p className="text-muted-foreground">
              ou 3x de {formatPrice(Math.ceil(product.priceInCents / 3))} sem juros
            </p>
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Quantidade e Adicionar */}
          {product.inStock && (
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button size="lg" onClick={handleAddToCart} className="flex-1 sm:flex-none">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
            </div>
          )}

          {/* Benefícios */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Entrega para todo Brasil</p>
                <p className="text-xs text-muted-foreground">Via Correios ou Sedex</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Compra Segura</p>
                <p className="text-xs text-muted-foreground">Pagamento via Stripe</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
