import { Product } from './types'

// Produtos de exemplo - Em produção, estes viriam de um banco de dados
export const PRODUCTS: Product[] = [
  // Bicicletas Novas
  {
    id: 'bike-mtb-aro29-001',
    name: 'Bicicleta MTB Aro 29 Shimano 21v',
    description: 'Bicicleta Mountain Bike aro 29, quadro em alumínio, câmbio Shimano 21 velocidades, freio a disco mecânico. Ideal para trilhas e uso urbano.',
    priceInCents: 189900,
    category: 'bicicletas-novas',
    images: ['/images/products/bike-mtb-29.jpg'],
    inStock: true,
    condition: 'new',
  },
  {
    id: 'bike-urbana-001',
    name: 'Bicicleta Urbana Aro 26',
    description: 'Bicicleta urbana confortável, ideal para o dia a dia. Aro 26, cesto frontal, bagageiro traseiro.',
    priceInCents: 89900,
    category: 'bicicletas-novas',
    images: ['/images/products/bike-urbana.jpg'],
    inStock: true,
    condition: 'new',
  },
  {
    id: 'bike-infantil-001',
    name: 'Bicicleta Infantil Aro 16',
    description: 'Bicicleta infantil com rodinhas de apoio, aro 16, para crianças de 4 a 6 anos.',
    priceInCents: 59900,
    category: 'bicicletas-novas',
    images: ['/images/products/bike-infantil.jpg'],
    inStock: true,
    condition: 'new',
  },
  // Bicicletas Semi-novas
  {
    id: 'bike-semi-001',
    name: 'Bicicleta Caloi Aro 26 - Semi-nova',
    description: 'Bicicleta Caloi em excelente estado, revisada e pronta para uso. Aro 26, 18 marchas.',
    priceInCents: 65000,
    category: 'bicicletas-seminovas',
    images: ['/images/products/bike-semi.jpg'],
    inStock: true,
    condition: 'used',
  },
  // Capacetes
  {
    id: 'capacete-mtb-001',
    name: 'Capacete Ciclismo MTB com LED',
    description: 'Capacete para ciclismo com luz LED traseira, ventilação otimizada, ajuste micrométrico.',
    priceInCents: 12900,
    category: 'capacetes',
    images: ['/images/products/capacete-mtb.jpg'],
    inStock: true,
  },
  {
    id: 'capacete-urbano-001',
    name: 'Capacete Urbano Clássico',
    description: 'Capacete estilo urbano, leve e confortável, ideal para uso na cidade.',
    priceInCents: 8900,
    category: 'capacetes',
    images: ['/images/products/capacete-urbano.jpg'],
    inStock: true,
  },
  // Pneus e Câmaras
  {
    id: 'pneu-29-001',
    name: 'Pneu MTB Aro 29 x 2.20',
    description: 'Pneu para mountain bike aro 29, medida 2.20, com cravos para trilha.',
    priceInCents: 7900,
    category: 'pneus-camaras',
    images: ['/images/products/pneu-29.jpg'],
    inStock: true,
  },
  {
    id: 'camara-29-001',
    name: 'Câmara de Ar Aro 29',
    description: 'Câmara de ar para bicicleta aro 29, válvula Presta.',
    priceInCents: 2500,
    category: 'pneus-camaras',
    images: ['/images/products/camara-29.jpg'],
    inStock: true,
  },
  // Bancos e Selins
  {
    id: 'selim-gel-001',
    name: 'Selim Anatômico com Gel',
    description: 'Selim confortável com espuma de gel, ideal para longas pedaladas.',
    priceInCents: 5900,
    category: 'bancos-selins',
    images: ['/images/products/selim-gel.jpg'],
    inStock: true,
  },
  // Adesivos
  {
    id: 'adesivo-personalizado-001',
    name: 'Kit Adesivos Personalizados',
    description: 'Kit de adesivos personalizados para sua bicicleta. Escolha cores e modelos.',
    priceInCents: 4900,
    category: 'adesivos',
    images: ['/images/products/adesivos.jpg'],
    inStock: true,
  },
  // Manoplas para Moto
  {
    id: 'manopla-moto-001',
    name: 'Par de Manoplas Universal para Moto',
    description: 'Par de manoplas em borracha de alta qualidade, encaixe universal 22mm.',
    priceInCents: 3500,
    category: 'manoplas-moto',
    images: ['/images/products/manopla-moto.jpg'],
    inStock: true,
  },
  // Acessórios
  {
    id: 'luz-led-001',
    name: 'Kit Luz LED Dianteira + Traseira',
    description: 'Kit de iluminação LED recarregável USB, 3 modos de luz.',
    priceInCents: 4500,
    category: 'acessorios',
    images: ['/images/products/luz-led.jpg'],
    inStock: true,
  },
  {
    id: 'cadeado-001',
    name: 'Cadeado com Chave para Bicicleta',
    description: 'Cadeado com cabo de aço revestido, 1 metro, 2 chaves inclusas.',
    priceInCents: 3900,
    category: 'acessorios',
    images: ['/images/products/cadeado.jpg'],
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  )
}
