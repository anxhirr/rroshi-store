import { fetchUser } from './fetchFromSanity'
import { client } from './sanity.client'

export interface User {
  email: string
  name: string
}

export const createUserInSanity = async (user: User) => {
  const { name, email } = user

  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  )

  if (existingUser) {
    console.log('User already exists in Sanity')
    return
  }

  const doc = {
    _type: 'user',
    name,
    email,
  }
  try {
    const response = await client.create(doc)
    console.log('User created in Sanity', response)
  } catch (error) {
    console.error('Error creating user in Sanity', error)
  }
}

export const createOrderInSanity = async (orderData) => {
  const user = await fetchUser(orderData.userEmail)

  const productswithQuantity = orderData.cartItems.map((product) => ({
    product: {
      _type: 'reference',
      _ref: product._id,
    },
    _key: product._id,
    quantity: product.quantity || 1,
  }))

  const doc = {
    _type: 'order',
    user_email: orderData.userEmail,
    user: {
      _type: 'reference',
      _ref: user._id,
    },
    products: productswithQuantity,
    created_at: new Date().toISOString(),
    telephone: orderData.telephone,
    address: orderData.address,
    city: orderData.city,
    zip: orderData.zip,
  }
  try {
    const response = await client.create(doc)
    console.log('Order created in Sanity', response)
    return response
  } catch (error) {
    console.error('Error creating order in Sanity', error)
    return error
  }
}
