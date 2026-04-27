// Integração com API de frete dos Correios
// Esta é uma integração simplificada. Para produção, considere usar um serviço como Melhor Envio

export interface ShippingQuote {
  service: string
  name: string
  deadline: number
  price: number
  errorCode?: string
}

// Dados simulados de frete para protótipo
// Em produção, integre com a API real dos Correios via Melhor Envio ou similar
const MOCK_SHIPPING_RATES: Record<string, number> = {
  '04162': 2500, // PAC - estimativa base
  '01482': 5000, // SEDEX - estimativa base
}

export async function calculateShipping(
  zipCode: string,
  weight: number, // em gramas
  value: number, // em centavos
): Promise<ShippingQuote[]> {
  // Remove formatação do CEP
  const cep = zipCode.replace(/\D/g, '')

  if (cep.length !== 8) {
    throw new Error('CEP inválido')
  }

  // Simular cálculo de frete
  // Em produção, faça a chamada real para a API
  const quotes: ShippingQuote[] = [
    {
      service: 'pac',
      name: 'PAC (5-8 dias úteis)',
      deadline: 7,
      price: calculatePrice(weight, 2500),
    },
    {
      service: 'sedex',
      name: 'SEDEX (1-2 dias úteis)',
      deadline: 2,
      price: calculatePrice(weight, 5000),
    },
  ]

  return quotes
}

function calculatePrice(weight: number, basePrice: number): number {
  // Cálculo simplificado: R$ base + custo adicional por peso
  // R$ 0.50 por 100g acima do peso mínimo
  const additionalWeight = Math.max(0, weight - 1000)
  const additionalCost = Math.ceil((additionalWeight / 100) * 50)
  return basePrice + additionalCost
}

// Função auxiliar para estimar peso baseado no tipo de produto
export function estimateProductWeight(productName: string): number {
  // Peso em gramas
  const weights: Record<string, number> = {
    'bicicleta': 15000,
    'capacete': 500,
    'selim': 300,
    'pneu': 800,
    'câmara': 200,
    'acessório': 200,
    'adesivo': 10,
  }

  for (const [key, weight] of Object.entries(weights)) {
    if (productName.toLowerCase().includes(key)) {
      return weight
    }
  }

  return 500 // peso padrão
}

// Calcula peso total do carrinho
export function calculateCartWeight(items: Array<{ name: string; quantity: number }>): number {
  return items.reduce((total, item) => {
    return total + estimateProductWeight(item.name) * item.quantity
  }, 0)
}
