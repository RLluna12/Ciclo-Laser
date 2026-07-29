'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Eye, ExternalLink } from 'lucide-react'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/format'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <Link href={`/produto/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.images[0] || '/images/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.condition === 'used' && (
          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600">
            Semi-nova
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="destructive">Esgotado</Badge>
          </div>
        )}
        {product.shopeeUrl && product.inStock && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-orange-500 text-white text-xs">Shopee</Badge>
          </div>
        )}
      </Link>
      <CardContent className="flex-1 p-4">
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-bold text-primary mt-2">
          {formatPrice(product.priceInCents)}
        </p>
        <p className="text-xs text-muted-foreground">
          ou 3x de {formatPrice(Math.ceil(product.priceInCents / 3))} sem juros
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          asChild
        >
          <Link href={`/produto/${product.id}`}>
            <Eye className="h-4 w-4 mr-1" />
            Ver
          </Link>
        </Button>
        {product.shopeeUrl ? (
          <Button
            size="sm"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            asChild
            disabled={!product.inStock}
          >
            <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Comprar
            </a>
          </Button>
        ) : (
          <Button
            size="sm"
            className="flex-1"
            disabled={!product.inStock}
            asChild
          >
            <Link href={`/produto/${product.id}`}>
              <ShoppingCart className="h-4 w-4 mr-1" />
              Comprar
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
