'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  name: string
  icon: string
}

interface ProductsFilterProps {
  categories: readonly Category[]
  currentCategory?: string
  currentSearch?: string
}

export function ProductsFilter({
  categories,
  currentCategory,
  currentSearch,
}: ProductsFilterProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(currentSearch || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/produtos?busca=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push('/produtos')
    }
  }

  const clearFilters = () => {
    setSearchQuery('')
    router.push('/produtos')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Busca */}
        <div>
          <label className="text-sm font-medium mb-2 block">Buscar</label>
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Digite sua busca..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Categorias */}
        <div>
          <label className="text-sm font-medium mb-3 block">Categorias</label>
          <div className="space-y-1">
            <Link
              href="/produtos"
              className={cn(
                'block px-3 py-2 rounded-md text-sm transition-colors',
                !currentCategory && !currentSearch
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              )}
            >
              Todos os Produtos
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/produtos?categoria=${category.id}`}
                className={cn(
                  'block px-3 py-2 rounded-md text-sm transition-colors',
                  currentCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Limpar filtros */}
        {(currentCategory || currentSearch) && (
          <Button
            variant="outline"
            className="w-full"
            onClick={clearFilters}
          >
            <X className="h-4 w-4 mr-2" />
            Limpar Filtros
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
