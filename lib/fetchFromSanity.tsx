import { groq } from 'next-sanity'
import { client } from './sanity.client'

export const fetchBanner = async () => {
  const query = groq`
    *[_type == "banner"]
    `
  return await client.fetch(query)
}

export const fetchProducts = async () => {
  const query = groq`
    *[_type == "product"]
    `
  return await client.fetch(query)
}

export const fetchLogo = async () => {
  const query = groq`
  *[_type == "logo"]
  `
  return await client.fetch(query)
}
export const fetchProduct = async (slug: string) => {
  const query = groq`
    *[_type == "product" && slug.current == '${slug}'][0]
    `

  try {
    const product = await client.fetch(query)
    return product
  } catch (error) {
    return error.message
  }
}
export const fetchProductByRef = async (productRef: string) => {
  const query = groq`
      *[ _id == "${productRef}" ][0]
    `

  try {
    const product = await client.fetch(query)
    return product
  } catch (error) {
    return error.message
  }
}

export const fetchUser = async (email: string) => {
  const query = groq`
    *[_type == "user" && email == '${email}'][0]
    `

  try {
    const user = await client.fetch(query)
    return user
  } catch (error) {
    return error.message
  }
}
export const fetchOrdersByEmail = async (email: string) => {
  const query = groq`
    *[_type == "order" && user_email == "${email}"]
    `

  try {
    return await client.fetch(query)
  } catch (error) {
    return error.message
  }
}

export const getAllOrdersByEmail = async (id: string) => {
  const query = groq`
      *[_type == "order" && user_email == "${id}"]{
        _id,
        created_at,
        products[]{
          quantity,
          "product": *[_id == ^.product._ref][0] {
            name,
            price,
            slug,
            details,
            "image": image[0]{
              asset->{
                _id,
                url
              }
            }
          }
        }
      }
  `
  try {
    return await client.fetch(query)
  } catch (error) {
    return error.message
  }
}
