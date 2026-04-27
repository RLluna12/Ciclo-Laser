'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ShoppingBag, ArrowLeft, CreditCard, Loader2 } from 'lucide-react'
import { useCart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FieldGroup, Field, FieldLabel, FieldSet, FieldLegend } from '@/components/ui/field'

interface AddressForm {
  name: string
  email: string
  phone: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export function CheckoutContent() {
  const router = useRouter()
  const { cart, getTotal, setAddress, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<'address' | 'payment'>('address')
  const [form, setForm] = useState<AddressForm>({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-20 w-20 text-muted-foreground mb-6" />
        <h2 className="text-2xl font-semibold mb-2">Seu carrinho está vazio</h2>
        <p className="text-muted-foreground mb-6">
          Adicione produtos ao carrinho antes de finalizar a compra.
        </p>
        <Button size="lg" asChild>
          <Link href="/produtos">Ver Produtos</Link>
        </Button>
      </div>
    )
  }

  const total = getTotal()
  const shipping = total >= 30000 ? 0 : 2500
  const finalTotal = total + shipping

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const fetchAddress = async () => {
    const cep = form.zipCode.replace(/\D/g, '')
    if (cep.length !== 8) return

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await res.json()
      if (!data.erro) {
        setForm((prev) => ({
          ...prev,
          street: data.logradouro || prev.street,
          neighborhood: data.bairro || prev.neighborhood,
          city: data.localidade || prev.city,
          state: data.uf || prev.state,
        }))
      }
    } catch {
      // Ignore errors
    }
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAddress({
      name: form.name,
      email: form.email,
      phone: form.phone,
      street: form.street,
      number: form.number,
      complement: form.complement,
      neighborhood: form.neighborhood,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
    })
    setStep('payment')
  }

  const handlePayment = async () => {
    setIsLoading(true)
    
    // Gerar ID do pedido
    const orderId = `CL${Date.now().toString(36).toUpperCase()}`
    
    // Salvar pedido no localStorage para o admin ver
    const orders = JSON.parse(localStorage.getItem('ciclo-laser-orders') || '[]')
    const newOrder = {
      id: orderId,
      items: cart.items,
      address: cart.address,
      total: finalTotal,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    orders.push(newOrder)
    localStorage.setItem('ciclo-laser-orders', JSON.stringify(orders))
    
    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // Limpar carrinho e redirecionar
    clearCart()
    router.push(`/pedido/${orderId}`)
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Formulário */}
      <div className="lg:col-span-2">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/carrinho">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o Carrinho
          </Link>
        </Button>

        {step === 'address' && (
          <Card>
            <CardHeader>
              <CardTitle>Endereço de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddressSubmit}>
                <FieldSet className="space-y-4">
                  <FieldLegend className="sr-only">Dados pessoais</FieldLegend>
                  
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Nome Completo *</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                  </FieldGroup>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="email">E-mail *</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Telefone/WhatsApp *</FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </Field>
                  </div>
                </FieldSet>

                <FieldSet className="space-y-4 mt-6 pt-6 border-t">
                  <FieldLegend className="sr-only">Endereço</FieldLegend>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <Field>
                      <FieldLabel htmlFor="zipCode">CEP *</FieldLabel>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={form.zipCode}
                        onChange={handleChange}
                        onBlur={fetchAddress}
                        placeholder="00000-000"
                        required
                      />
                    </Field>
                    <Field className="sm:col-span-2">
                      <FieldLabel htmlFor="street">Rua *</FieldLabel>
                      <Input
                        id="street"
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Field>
                      <FieldLabel htmlFor="number">Número *</FieldLabel>
                      <Input
                        id="number"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="complement">Complemento</FieldLabel>
                      <Input
                        id="complement"
                        name="complement"
                        value={form.complement}
                        onChange={handleChange}
                      />
                    </Field>
                    <Field className="col-span-2">
                      <FieldLabel htmlFor="neighborhood">Bairro *</FieldLabel>
                      <Input
                        id="neighborhood"
                        name="neighborhood"
                        value={form.neighborhood}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="city">Cidade *</FieldLabel>
                      <Input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="state">Estado *</FieldLabel>
                      <Input
                        id="state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        placeholder="SP"
                        maxLength={2}
                        required
                      />
                    </Field>
                  </div>
                </FieldSet>

                <Button type="submit" className="w-full mt-6" size="lg">
                  Continuar para Pagamento
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 'payment' && (
          <Card>
            <CardHeader>
              <CardTitle>Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Enviando para:</h3>
                <p className="text-sm text-muted-foreground">
                  {form.name}<br />
                  {form.street}, {form.number}
                  {form.complement && ` - ${form.complement}`}<br />
                  {form.neighborhood}, {form.city} - {form.state}<br />
                  CEP: {form.zipCode}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-2"
                  onClick={() => setStep('address')}
                >
                  Alterar endereço
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ao clicar em &quot;Finalizar Pedido&quot;, você será redirecionado para concluir o pagamento de forma segura via Stripe.
                </p>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePayment}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Finalizar Pedido - {formatPrice(finalTotal)}
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Resumo */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Lista de itens */}
            <div className="space-y-3">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                    <Image
                      src={item.product.images[0] || '/images/placeholder-product.jpg'}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Qtd: {item.quantity}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {formatPrice(item.product.priceInCents * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Frete</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Grátis</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span className="text-primary">{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
