export type CartItem = {
  details: string
  image: {}
  name: string
  price: number
  quantity: number
  slug: {}
  _created_at: string
  _id: string
  _rev: string
  _type: string
  _updated_at: string
}

export interface orderDataType {
  cartItems: any
  userEmail: string
  total: number
  telephone: string
  address: string
  city: string
  zip: string
}

export interface toRenderOrderDataType {
  created_at: string
  products: any
  total: number
  status: string
  _id: string
}
