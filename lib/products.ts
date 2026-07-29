import { Product } from './types'

const SHOPEE_STORE = 'https://shopee.com.br/ciclo.laser'

export const PRODUCTS: Product[] = [
  // Bicicletas Novas
  {
    id: 'bike-mtb-aro29-001',
    name: 'Bicicleta MTB Aro 29 Shimano 21v',
    description: 'Bicicleta Mountain Bike aro 29, quadro em alumínio, câmbio Shimano 21 velocidades, freio a disco mecânico. Ideal para trilhas e uso urbano.',
    priceInCents: 189900,
    category: 'bicicletas-novas',
    images: ['https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=600&q=80'],
    inStock: true,
    condition: 'new',
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'bike-urbana-001',
    name: 'Bicicleta Urbana Aro 26',
    description: 'Bicicleta urbana confortável, ideal para o dia a dia. Aro 26, cesto frontal, bagageiro traseiro.',
    priceInCents: 89900,
    category: 'bicicletas-novas',
    images: ['https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80'],
    inStock: true,
    condition: 'new',
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'bike-speed-001',
    name: 'Bicicleta Speed Aro 700 Shimano',
    description: 'Bicicleta speed aro 700, quadro em alumínio, câmbio Shimano 14 velocidades. Leve e aerodinâmica para longas distâncias.',
    priceInCents: 249900,
    category: 'bicicletas-novas',
    images: ['https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&q=80'],
    inStock: true,
    condition: 'new',
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'bike-infantil-001',
    name: 'Bicicleta Infantil Aro 16',
    description: 'Bicicleta infantil com rodinhas de apoio, aro 16, para crianças de 4 a 6 anos.',
    priceInCents: 59900,
    category: 'bicicletas-novas',
    images: ['https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&q=80'],
    inStock: true,
    condition: 'new',
    shopeeUrl: SHOPEE_STORE,
  },
  // Bicicletas Semi-novas
  {
    id: 'bike-semi-001',
    name: 'Bicicleta Caloi Aro 26 - Semi-nova',
    description: 'Bicicleta Caloi em excelente estado, revisada e pronta para uso. Aro 26, 18 marchas.',
    priceInCents: 65000,
    category: 'bicicletas-seminovas',
    images: ['https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80'],
    inStock: true,
    condition: 'used',
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'bike-semi-mtb-001',
    name: 'Bicicleta MTB Aro 26 - Semi-nova',
    description: 'Mountain bike aro 26 em ótimo estado, câmbio 21 velocidades, revisada e com acessórios.',
    priceInCents: 79900,
    category: 'bicicletas-seminovas',
    images: ['https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&q=80'],
    inStock: true,
    condition: 'used',
    shopeeUrl: SHOPEE_STORE,
  },
  // Capacetes
  {
    id: 'capacete-mtb-001',
    name: 'Capacete Ciclismo MTB com LED',
    description: 'Capacete para ciclismo com luz LED traseira, ventilação otimizada, ajuste micrométrico.',
    priceInCents: 12900,
    category: 'capacetes',
    images: ['https://images.unsplash.com/photo-1557803754-70a573c4db11?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'capacete-urbano-001',
    name: 'Capacete Urbano Clássico',
    description: 'Capacete estilo urbano, leve e confortável, ideal para uso na cidade.',
    priceInCents: 8900,
    category: 'capacetes',
    images: ['https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  // Pneus e Câmaras
  {
    id: 'pneu-29-001',
    name: 'Pneu MTB Aro 29 x 2.20',
    description: 'Pneu para mountain bike aro 29, medida 2.20, com cravos para trilha.',
    priceInCents: 7900,
    category: 'pneus-camaras',
    images: ['https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'camara-29-001',
    name: 'Câmara de Ar Aro 29',
    description: 'Câmara de ar para bicicleta aro 29, válvula Presta.',
    priceInCents: 2500,
    category: 'pneus-camaras',
    images: ['https://images.unsplash.com/photo-1548407260-da850faa41e3?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  // Bancos e Selins
  {
    id: 'selim-gel-001',
    name: 'Selim Anatômico com Gel',
    description: 'Selim confortável com espuma de gel, ideal para longas pedaladas.',
    priceInCents: 5900,
    category: 'bancos-selins',
    images: ['https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  // Adesivos
  {
    id: 'adesivo-personalizado-001',
    name: 'Kit Adesivos Personalizados',
    description: 'Kit de adesivos personalizados para sua bicicleta. Escolha cores e modelos.',
    priceInCents: 4900,
    category: 'adesivos',
    images: ['https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  // Manoplas para Moto
  {
    id: 'manopla-moto-001',
    name: 'Par de Manoplas Universal para Moto',
    description: 'Par de manoplas em borracha de alta qualidade, encaixe universal 22mm.',
    priceInCents: 3500,
    category: 'manoplas-moto',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  // Acessórios
  {
    id: 'luz-led-001',
    name: 'Kit Luz LED Dianteira + Traseira',
    description: 'Kit de iluminação LED recarregável USB, 3 modos de luz.',
    priceInCents: 4500,
    category: 'acessorios',
    images: ['https://images.unsplash.com/photo-1544191696-102dbcd8e2db?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'cadeado-001',
    name: 'Cadeado com Chave para Bicicleta',
    description: 'Cadeado com cabo de aço revestido, 1 metro, 2 chaves inclusas.',
    priceInCents: 3900,
    category: 'acessorios',
    images: ['https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
  },
  {
    id: 'bomba-ar-001',
    name: 'Bomba de Ar Portátil com Manômetro',
    description: 'Bomba de ar manual com manômetro de pressão, compatível com válvula Presta e Schrader.',
    priceInCents: 5900,
    category: 'acessorios',
    images: ['https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80'],
    inStock: true,
    shopeeUrl: SHOPEE_STORE,
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
