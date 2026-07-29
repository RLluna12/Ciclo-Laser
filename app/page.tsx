import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Clock, Award, Star, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { CategoryCard } from '@/components/category-card'
import { PRODUCTS } from '@/lib/products'
import { CATEGORIES } from '@/lib/types'

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 8)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden min-h-[520px] flex items-center">
        {/* Rodas decorativas de fundo */}
        <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] rounded-full border-[40px] border-white/5 pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-[360px] h-[360px] rounded-full border-[20px] border-orange-500/10 pointer-events-none" />
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border-[50px] border-white/[0.03] pointer-events-none" />
        <div className="absolute right-10 top-10 w-[300px] h-[300px] rounded-full border-[15px] border-orange-400/10 pointer-events-none" />

        {/* Linha de pista diagonal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="absolute bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                38 anos de tradição em Mauá - SP
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                Sua bike<br />
                <span className="text-orange-400">perfeita</span><br />
                <span className="text-white/60 text-4xl md:text-5xl font-bold">está aqui.</span>
              </h1>

              <p className="text-lg text-blue-200/80 mb-8 max-w-md leading-relaxed">
                Bicicletas novas e semi-novas, peças, capacetes e acessórios. Tudo com qualidade e preço justo.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-orange-500/30" asChild>
                  <Link href="/produtos">
                    Ver Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-6 text-base rounded-xl backdrop-blur-sm" asChild>
                  <a href="https://shopee.com.br/ciclo.laser" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Comprar na Shopee
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-black text-orange-400">38+</p>
                  <p className="text-sm text-blue-200/60 mt-1">Anos de experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">1000+</p>
                  <p className="text-sm text-blue-200/60 mt-1">Clientes satisfeitos</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">500+</p>
                  <p className="text-sm text-blue-200/60 mt-1">Produtos disponíveis</p>
                </div>
              </div>
            </div>

            {/* Bike SVG ilustrativa */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                {/* Brilho atrás da bike */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
                </div>
                <svg viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                  {/* Roda traseira */}
                  <circle cx="130" cy="265" r="90" stroke="#f97316" strokeWidth="12" fill="none" opacity="0.9"/>
                  <circle cx="130" cy="265" r="70" stroke="#f97316" strokeWidth="3" fill="none" opacity="0.2"/>
                  <circle cx="130" cy="265" r="15" fill="#f97316" opacity="0.8"/>
                  {/* Raios traseiros */}
                  {[0,40,80,120,160,200,240,280,320,360].map((a,i) => (
                    <line key={i}
                      x1={130 + 15*Math.cos(a*Math.PI/180)}
                      y1={265 + 15*Math.sin(a*Math.PI/180)}
                      x2={130 + 88*Math.cos(a*Math.PI/180)}
                      y2={265 + 88*Math.sin(a*Math.PI/180)}
                      stroke="#f97316" strokeWidth="2" opacity="0.5"
                    />
                  ))}

                  {/* Roda dianteira */}
                  <circle cx="370" cy="265" r="90" stroke="#f97316" strokeWidth="12" fill="none" opacity="0.9"/>
                  <circle cx="370" cy="265" r="70" stroke="#f97316" strokeWidth="3" fill="none" opacity="0.2"/>
                  <circle cx="370" cy="265" r="15" fill="#f97316" opacity="0.8"/>
                  {/* Raios dianteiros */}
                  {[0,40,80,120,160,200,240,280,320,360].map((a,i) => (
                    <line key={i}
                      x1={370 + 15*Math.cos(a*Math.PI/180)}
                      y1={265 + 15*Math.sin(a*Math.PI/180)}
                      x2={370 + 88*Math.cos(a*Math.PI/180)}
                      y2={265 + 88*Math.sin(a*Math.PI/180)}
                      stroke="#f97316" strokeWidth="2" opacity="0.5"
                    />
                  ))}

                  {/* Quadro da bike */}
                  {/* Tubo de baixo (chain stay) */}
                  <line x1="130" y1="265" x2="245" y2="200" stroke="white" strokeWidth="10" strokeLinecap="round"/>
                  {/* Tubo do assento (seat tube) */}
                  <line x1="245" y1="200" x2="220" y2="265" stroke="white" strokeWidth="10" strokeLinecap="round"/>
                  {/* Tubo superior (top tube) */}
                  <line x1="245" y1="200" x2="330" y2="165" stroke="white" strokeWidth="9" strokeLinecap="round"/>
                  {/* Down tube */}
                  <line x1="245" y1="200" x2="370" y2="265" stroke="white" strokeWidth="10" strokeLinecap="round"/>
                  {/* Fork */}
                  <line x1="330" y1="165" x2="370" y2="265" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                  {/* Head tube */}
                  <line x1="330" y1="145" x2="335" y2="185" stroke="white" strokeWidth="12" strokeLinecap="round"/>

                  {/* Guidão */}
                  <line x1="310" y1="145" x2="355" y2="138" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                  <line x1="355" y1="138" x2="360" y2="158" stroke="white" strokeWidth="6" strokeLinecap="round"/>

                  {/* Selim */}
                  <line x1="245" y1="200" x2="242" y2="155" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                  <rect x="220" y="147" width="44" height="10" rx="5" fill="white" opacity="0.9"/>

                  {/* Pedivela */}
                  <circle cx="220" cy="265" r="22" stroke="#f97316" strokeWidth="6" fill="none"/>
                  <circle cx="220" cy="265" r="6" fill="#f97316"/>
                  <line x1="220" y1="265" x2="205" y2="280" stroke="#f97316" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="205" y1="280" x2="195" y2="280" stroke="white" strokeWidth="4" strokeLinecap="round"/>

                  {/* Corrente simplificada */}
                  <path d="M 220 265 Q 170 280 130 265" stroke="#f97316" strokeWidth="3" fill="none" strokeDasharray="6 4" opacity="0.6"/>

                  {/* Sombra no chão */}
                  <ellipse cx="250" cy="358" rx="180" ry="10" fill="black" opacity="0.25"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Categorias rápidas */}
          <div className="mt-12 overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-3 min-w-max">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/produtos?categoria=${category.id}`}
                  className="flex-shrink-0 px-4 py-2 bg-white/8 hover:bg-orange-500/80 text-white rounded-full font-medium transition-all text-sm border border-white/15 hover:border-orange-400"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Shopee Mobile */}
      <section className="lg:hidden bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-4">
        <a
          href="https://shopee.com.br/ciclo.laser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 font-bold text-base"
        >
          <ShoppingBag className="h-5 w-5" />
          Compre também pela nossa loja na Shopee!
          <ArrowRight className="h-5 w-5" />
        </a>
      </section>

      {/* Benefícios */}
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
              <p className="text-xs text-muted-foreground">Protegido pela Shopee</p>
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
                id={category.id}
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
