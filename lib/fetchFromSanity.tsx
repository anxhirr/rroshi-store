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
type Slug = string

export const fetchProduct = async (slug: Slug) => {
  const query = groq`
    *[_type == "product" && slug.current == '${slug}'][0]
    `

  try {
    const product = await client.fetch(query)
    return product
  } catch (error) {
    console.log(error)
  }
}
export default fetchProduct

export const fetchUser = async (email: string) => {
  const query = groq`
    *[_type == "user" && email == '${email}'][0]
    `

  try {
    const user = await client.fetch(query)
    return user
  } catch (error) {
    console.log(error)
  }
}
