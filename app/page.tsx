import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Clock, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { CategoryCard } from '@/components/category-card'
import { PRODUCTS } from '@/lib/products'
import { CATEGORIES } from '@/lib/types'

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 8)

  return (
    <div>
      {/* Hero Section - Estilo KaBuM com banners */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Banner Principal */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-400 rounded-full opacity-10" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 rounded-full bg-white text-orange-600 font-bold text-sm mb-4">
                  🚀 PROMOÇÃO ESPECIAL
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Bicicletas em Promoção!
                </h2>
                <p className="text-lg text-orange-50 mb-6">
                  Até 40% OFF em bicicletas novas e semi-novas
                </p>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold" asChild>
                  <Link href="/produtos?categoria=bicicletas-novas">
                    Ver Promoção
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Banner Secundário */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 relative overflow-hidden hidden lg:block">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-400 rounded-full opacity-10" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-2 rounded-full bg-white text-green-600 font-bold text-sm mb-3">
                  ⭐ FRETE GRÁTIS
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Compras acima de R$ 300
                </h3>
                <p className="text-sm text-green-50">
                  Para todo Brasil via Correios
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Hero com Texto */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Ciclo <span className="text-orange-400">Laser</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                38 anos oferecendo bicicletas de qualidade, peças, acessórios e tudo que você precisa para andar de bike! 🚴‍♂️
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" asChild>
                  <Link href="/produtos">
                    Explorar Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-900 border-white hover:bg-blue-50" asChild>
                  <a href="https://wa.me/5511934340613" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-400/20 rounded-full blur-3xl" />
                <Image
                  src="/images/logo.png"
                  alt="Ciclo Laser"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios - Estilo KaBuM */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-blue-50 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-orange-500/10">
                <Truck className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-sm md:text-base">Entrega Rápida</h3>
              <p className="text-xs text-muted-foreground">PAC e SEDEX</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-green-50 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-green-500/10">
                <Shield className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-bold text-sm md:text-base">Compra Segura</h3>
              <p className="text-xs text-muted-foreground">Stripe encriptado</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-purple-50 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-500/10">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-bold text-sm md:text-base">Atendimento</h3>
              <p className="text-xs text-muted-foreground">Seg-Sab 08h-18h</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-yellow-50 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-yellow-500/10">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-bold text-sm md:text-base">38 Anos</h3>
              <p className="text-xs text-muted-foreground">De tradição</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Categorias</h2>
          <p className="text-muted-foreground mb-8">Encontre exatamente o que você procura</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                href={`/produtos?categoria=${category.id}`}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Estilo KaBuM */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">⭐ Mais Vendidos</h2>
            <p className="text-muted-foreground text-lg">Os produtos que mais amam!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8" asChild>
              <Link href="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp - Estilo KaBuM */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">💬 Dúvidas?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp. Temos especialistas prontos para ajudar você a escolher o melhor produto! 🚴‍♀️
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8"
            asChild
          >
            <a
              href="https://wa.me/5511934340613?text=Olá! Vim pelo site e gostaria de saber mais sobre os produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 inline-flex"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Sobre - Seção Compacta */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Ciclo Laser 🚴</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Há <strong>38 anos</strong> servindo a comunidade de Mauá com qualidade e confiança.
              </p>
              <p className="text-muted-foreground mb-6">
                Oferecemos bicicletas novas e semi-novas, peças, acessórios, capacetes e muito mais. Cada produto é selecionado com cuidado para garantir satisfação total do cliente.
              </p>
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">38</p>
                  <p className="text-sm text-muted-foreground mt-1">Anos</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-orange-500">1000+</p>
                  <p className="text-sm text-muted-foreground mt-1">Clientes</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">500+</p>
                  <p className="text-sm text-muted-foreground mt-1">Produtos</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">📍 Visite Nossa Loja</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-semibold text-orange-300 mb-2">Endereço:</p>
                  <p>Avenida Barão de Mauá, 3126<br />Jardim Maringá, Mauá - SP<br />CEP: 09340-440</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-300 mb-2">Horário:</p>
                  <p>Seg-Sex: 08h às 18h<br />Sábado: 08h às 17h</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-300 mb-2">Contato:</p>
                  <p>☎️ (11) 4578-3995<br />💬 (11) 93434-0613</p>
                </div>
              </div>
              <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Barão+de+Mauá+3126+Mauá+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Google Maps 🗺️
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
