import { groq } from 'next-sanity'
import { client } from './sanity.client'

export const fetchBanner = async () => {
  const query = groq`
    *[_type == "banner"]
    `
  const banner = await client.fetch(query)
  return banner
}

export const fetchProducts = async () => {
  const query = groq`
    *[_type == "product"]
    `
  const products = await client.fetch(query)
  return products
}

type Slug = {
  slug: string
}

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

  // const product = await client.fetch(query)
  // return product
}
export default fetchProduct
