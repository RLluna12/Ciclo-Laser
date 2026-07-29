'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Truck, Shield, ArrowLeft, ExternalLink, Star } from 'lucide-react'
import { Product } from '@/lib/types'
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
        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.images[0] || '/images/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.condition === 'used' && (
            <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600 text-base px-3 py-1">
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
          <h1 className="text-3xl font-bold mt-2 mb-2">{product.name}</h1>

          {/* Avaliação */}
          <div className="flex items-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">5.0 · Vendido pela Ciclo Laser</span>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
            <p className="text-4xl font-bold text-orange-600">
              {formatPrice(product.priceInCents)}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              ou 3x de {formatPrice(Math.ceil(product.priceInCents / 3))} sem juros
            </p>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          {/* Botão Shopee */}
          {product.inStock && product.shopeeUrl ? (
            <div className="mb-8 space-y-3">
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                <ShoppingCart className="h-6 w-6" />
                Comprar na Shopee
                <ExternalLink className="h-5 w-5 opacity-80" />
              </a>
              <a
                href={`https://wa.me/5511934340613?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Tirar dúvida no WhatsApp
              </a>
            </div>
          ) : !product.inStock ? (
            <div className="mb-8 p-4 bg-gray-100 rounded-xl text-center text-gray-500 font-medium">
              Produto temporariamente esgotado
            </div>
          ) : null}

          {/* Benefícios */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-4 flex items-center gap-3 border-orange-100">
              <div className="p-2 rounded-full bg-orange-500/10">
                <Truck className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Entrega para todo Brasil</p>
                <p className="text-xs text-muted-foreground">Via Correios ou Sedex</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3 border-green-100">
              <div className="p-2 rounded-full bg-green-500/10">
                <Shield className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Compra Segura</p>
                <p className="text-xs text-muted-foreground">Protegido pela Shopee</p>
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
