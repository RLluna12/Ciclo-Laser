import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductById, PRODUCTS } from '@/lib/products'
import { CATEGORIES } from '@/lib/types'
import { ProductDetails } from './product-details'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const category = CATEGORIES.find((c) => c.id === product.category)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <ProductDetails
      product={product}
      category={category}
      relatedProducts={relatedProducts}
    />
  )
}
