export const paymentMethodsArray = [
  'boleto',
  'pix',
  'cash',
  'credit-card',
  'debit-bank',
] as const

export type PaymentMethods = (typeof paymentMethodsArray)[number]
