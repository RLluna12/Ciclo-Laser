import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/components/cart-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Ciclo Laser Bicicletaria | 38 Anos de Tradição',
    template: '%s | Ciclo Laser Bicicletaria',
  },
  description:
    'Bicicletas novas e semi-novas, acessórios, capacetes, pneus, adesivos personalizados e muito mais. 38 anos de tradição em Mauá, SP.',
  keywords: [
    'bicicleta',
    'bike',
    'bicicletaria',
    'mauá',
    'são paulo',
    'acessórios',
    'capacete',
    'pneu',
    'adesivos',
    'manoplas moto',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ciclo Laser Bicicletaria',
  },
}

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
