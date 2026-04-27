import { PRODUCTS, getProductsByCategory, searchProducts } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Package } from 'lucide-react'

interface ProductsGridProps {
  categoryId?: string
  searchQuery?: string
}

export function ProductsGrid({ categoryId, searchQuery }: ProductsGridProps) {
  let products = PRODUCTS

  if (categoryId) {
    products = getProductsByCategory(categoryId)
  } else if (searchQuery) {
    products = searchProducts(searchQuery)
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Package className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h2>
        <p className="text-muted-foreground max-w-md">
          {searchQuery
            ? `Não encontramos resultados para "${searchQuery}". Tente buscar por outro termo.`
            : 'Não há produtos disponíveis nesta categoria no momento.'}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        {products.length} produto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
