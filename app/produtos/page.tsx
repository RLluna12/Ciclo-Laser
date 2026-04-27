import { Suspense } from 'react'
import { Metadata } from 'next'
import { ProductsGrid } from './products-grid'
import { ProductsFilter } from './products-filter'
import { CATEGORIES } from '@/lib/types'
import { Spinner } from '@/components/ui/spinner'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Confira todos os nossos produtos: bicicletas, acessórios, capacetes, pneus e muito mais.',
}

interface ProductsPageProps {
  searchParams: Promise<{ categoria?: string; busca?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const categoryId = params.categoria
  const searchQuery = params.busca

  const currentCategory = categoryId
    ? CATEGORIES.find((c) => c.id === categoryId)
    : null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {currentCategory ? currentCategory.name : searchQuery ? `Resultados para "${searchQuery}"` : 'Todos os Produtos'}
        </h1>
        <p className="text-muted-foreground">
          {currentCategory
            ? `Confira nossa seleção de ${currentCategory.name.toLowerCase()}`
            : 'Encontre o que você precisa para sua bike'}
        </p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside>
          <ProductsFilter
            categories={CATEGORIES}
            currentCategory={categoryId}
            currentSearch={searchQuery}
          />
        </aside>
        <main>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <Spinner className="h-8 w-8" />
              </div>
            }
          >
            <ProductsGrid categoryId={categoryId} searchQuery={searchQuery} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
