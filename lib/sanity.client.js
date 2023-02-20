import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: 'r5zbjv2s',
  dataset: 'product',
  useCdn: false,
  apiVersion: '2023-01-27',
  token: process.env.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
