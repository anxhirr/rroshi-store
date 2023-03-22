export interface orderDataType {
  cartItems: any
  userEmail: string
  total: number
  telephone: string
  address: string
  city: string
  zip: string
}

export interface SanityDataType {
  _created_at: string
  _id: string
  _rev: string
  _type: string
  _updated_at: string
}

export interface SanityImageType {
  asset: {
    _ref: string
    _type: string
  }
  _key: string
  _type: string
}

export interface BannerDataType extends SanityDataType {
  buttonText: string
  desc: string
  discount: string
  image: SanityImageType[]
  largeText1: string
  largeText2: string
  midText: string
  smallText: string
  product: string
  saleTime: string
}

export interface ProductDataType extends SanityDataType {
  details: string
  image: SanityImageType[]
  name: string
  price: number
  slug: {
    current: string
    _type: string
  }
}

export interface cartItem extends ProductDataType {
  quantity: number
}
