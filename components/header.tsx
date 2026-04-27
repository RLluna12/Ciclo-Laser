'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X, Phone, MapPin, Clock, Search } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { CATEGORIES } from '@/lib/types'

export function Header() {
  const { getItemCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const itemCount = getItemCount()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/produtos?busca=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:1145783995" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" />
              (11) 4578-3995
            </a>
            <a
              href="https://wa.me/5511934340613"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              (11) 93434-0613
            </a>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Seg-Sex 08h-18h | Sáb 08h-17h
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Mauá, SP
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold hover:text-primary">
                  Início
                </Link>
                <Link href="/produtos" className="text-lg font-semibold hover:text-primary">
                  Todos os Produtos
                </Link>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Categorias</p>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/produtos?categoria=${cat.id}`}
                      className="block py-2 hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <Link href="/contato" className="text-lg font-semibold hover:text-primary">
                    Contato
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Ciclo Laser Bicicletaria"
              width={140}
              height={70}
              className="h-14 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </form>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/produtos" className="text-sm font-medium hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Cart */}
          <Link href="/carrinho" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>
        </form>
      </div>
    </header>
  )
}
