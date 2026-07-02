export interface Formation {
  slug: string
  title: string
  subtitle: string
  description: string
  filieres: string[]
  price: number
  currency: string
  installments: { amount: number; label: string }[]
  badgeText?: string
  highlights?: string[]
  skills: string[]
  certificates?: string[]
  extras?: string[]
}

export interface NavLink {
  to: string
  label: string
}
