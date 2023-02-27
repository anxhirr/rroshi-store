import { CartItem, orderDataType } from '../typings'
import { fetchUser } from './fetchFromSanity'
import { client } from './sanity.client'

export type User = {
  image: string
  email: string
  name: string
}

export const createUserInSanity = async (user: User) => {
  const { name, email, image } = user

  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  )

  if (existingUser) return

  const doc = {
    _type: 'user',
    name,
    email,
    image_url: image,
  }
  await client.create(doc)
}

export const createOrderInSanity = async (orderData: orderDataType) => {
  const { cartItems, userEmail, address, city, telephone, zip } = orderData
  const user = await fetchUser(userEmail)

  const productswithQuantity = cartItems.map((product: CartItem) => ({
    product: {
      _type: 'reference',
      _ref: product._id,
    },
    _key: product._id,
    quantity: product.quantity || 1,
  }))

  const doc = {
    _type: 'order',
    user_email: userEmail,
    user: {
      _type: 'reference',
      _ref: user._id,
    },
    products: productswithQuantity,
    created_at: new Date().toISOString(),
    telephone,
    address,
    city,
    zip,
  }
  await client.create(doc)
}
