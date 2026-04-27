import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react'
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
      <section className="relative bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
                38 Anos de Tradição
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Tudo para sua{' '}
                <span className="text-primary">Bicicleta</span> em um só lugar
              </h1>
              <p className="text-lg text-background/80 mb-8 max-w-lg">
                Bicicletas novas e semi-novas, acessórios, peças, adesivos personalizados e muito mais. 
                Qualidade e confiança que você merece.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/produtos">
                    Ver Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" asChild>
                  <a href="https://wa.me/5511934340613" target="_blank" rel="noopener noreferrer">
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
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

      {/* Benefícios */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center gap-2 p-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Enviamos para Todo Brasil</h3>
              <p className="text-xs text-muted-foreground">Via Correios ou Sedex</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Compra Segura</h3>
              <p className="text-xs text-muted-foreground">Pagamento via Stripe</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Atendimento Rápido</h3>
              <p className="text-xs text-muted-foreground">WhatsApp disponível</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">38 Anos de Mercado</h3>
              <p className="text-xs text-muted-foreground">Tradição e confiança</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Categorias</h2>
            <p className="text-muted-foreground">Encontre o que você precisa</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
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

      {/* Produtos em destaque */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-muted-foreground">Confira nossas melhores ofertas</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/produtos">
                Ver Todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild>
              <Link href="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tem alguma dúvida?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Fale conosco pelo WhatsApp e tire todas as suas dúvidas sobre nossos produtos e serviços.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <a
              href="https://wa.me/5511934340613?text=Olá! Vim pelo site e gostaria de saber mais sobre os produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a Ciclo Laser</h2>
              <p className="text-muted-foreground mb-4">
                Há 38 anos no mercado, a Ciclo Laser se consolidou como referência em bicicletas e acessórios
                na região de Mauá e Grande São Paulo.
              </p>
              <p className="text-muted-foreground mb-4">
                Trabalhamos com bicicletas novas e semi-novas, acessórios de qualidade, adesivos personalizados,
                capacetes, pneus, selins e muito mais. Também oferecemos manoplas para motos.
              </p>
              <p className="text-muted-foreground mb-6">
                Nossa missão é oferecer os melhores produtos com preços justos e um atendimento excepcional.
              </p>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">38</p>
                  <p className="text-sm text-muted-foreground">Anos</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Clientes</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Produtos</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Visite Nossa Loja</h3>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Endereço:</strong><br />
                  Avenida Barão de Mauá, 3126<br />
                  Jardim Maringá, Mauá - SP<br />
                  CEP: 09340-440
                </p>
                <p>
                  <strong>Horário de Funcionamento:</strong><br />
                  Segunda a Sexta: 08h às 18h<br />
                  Sábado: 08h às 17h
                </p>
                <p>
                  <strong>Telefone:</strong> (11) 4578-3995<br />
                  <strong>WhatsApp:</strong> (11) 93434-0613
                </p>
              </div>
              <Button className="mt-6 w-full" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Barão+de+Mauá+3126+Mauá+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
