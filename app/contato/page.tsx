import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Ciclo Laser Bicicletaria. Estamos prontos para atendê-lo!',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida sobre nossos produtos ou serviços? Estamos aqui para ajudar!
            Entre em contato conosco por telefone, WhatsApp ou visite nossa loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-700 mb-2">
                (11) 93434-0613
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Atendimento rápido e direto. Tire suas dúvidas, faça pedidos ou solicite orçamentos.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <a
                  href="https://wa.me/5511934340613?text=Olá! Vim pelo site e gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chamar no WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Telefone */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Telefone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">
                (11) 4578-3995
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Ligue para nós durante o horário de funcionamento para atendimento imediato.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:1145783995">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Endereço e Horário */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Nossa Localização</h2>
                </div>
                <address className="not-italic text-muted-foreground mb-4">
                  <p className="font-medium text-foreground">Ciclo Laser Bicicletaria</p>
                  <p>Avenida Barão de Mauá, 3126</p>
                  <p>Jardim Maringá</p>
                  <p>Mauá - SP</p>
                  <p>CEP: 09340-440</p>
                </address>
                <Button asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Avenida+Barão+de+Mauá+3126+Mauá+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Horário de Funcionamento</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">08:00 às 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Sábado</span>
                    <span className="font-medium">08:00 às 17:00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Domingo e Feriados</span>
                    <span className="font-medium text-muted-foreground">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mapa */}
        <Card>
          <CardContent className="p-0 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8641034231366!2d-46.45844668447669!3d-23.653694584637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6996dab48d99%3A0x4ab7a83a9d6e7a4b!2sAv.%20Bar%C3%A3o%20de%20Mau%C3%A1%2C%203126%20-%20Jardim%20Maring%C3%A1%2C%20Mau%C3%A1%20-%20SP%2C%2009340-440!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ciclo Laser"
            />
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Prefere ver nossos produtos antes de entrar em contato?
          </p>
          <Button size="lg" asChild>
            <Link href="/produtos">Ver Catálogo de Produtos</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
