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

// export type OrderDataType = {
//   cartItems: CartItem[]
//   userEmail: string
//   address: string
//   city: string
//   telephone: string
//   zip: string
// }

// export type OrderFormDataType = {
//   address: string
//   city: string
//   telephone: string
//   zip: string
// }

export interface orderDataType {
  cartItems: any
  userEmail: string
  telephone: string
  address: string
  city: string
  zip: string
}
