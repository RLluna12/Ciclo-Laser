import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Painel Admin',
    template: '%s | Admin - Ciclo Laser',
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
