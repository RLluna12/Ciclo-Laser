import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { CATEGORIES } from '@/lib/types'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Ciclo Laser Bicicletaria"
              width={160}
              height={80}
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-background/80 mb-4">
              Há 38 anos no mercado, oferecendo qualidade e confiança em bicicletas,
              acessórios e serviços especializados.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/produtos?categoria=${cat.id}`}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-background/80 hover:text-background transition-colors">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-background/80 hover:text-background transition-colors">
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Avenida Barão de Mauá, 3126<br />
                  Jardim Maringá, Mauá - SP<br />
                  CEP: 09340-440
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:1145783995" className="text-background/80 hover:text-background">
                  (11) 4578-3995
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/5511934340613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background"
                >
                  (11) 93434-0613
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span className="text-background/80">
                  Seg-Sex: 08h-18h | Sáb: 08h-17h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Ciclo Laser Bicicletaria. Todos os direitos reservados.</p>
          <p className="mt-1">38 anos de tradição e confiança.</p>
        </div>
      </div>
    </footer>
  )
}
