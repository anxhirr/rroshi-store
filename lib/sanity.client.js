import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: 'r5zbjv2s',
  dataset: 'product',
  useCdn: false,
  apiVersion: '2023-01-27',
  token: process.env.SANITY_API_TOKEN,
  // token:
  // 'skisZChRyTAHZ4ZzGSqSV74P6E5ig1UMYIRFnInoz3JSMeQbhT4RlqzpVMJQbqzRgkL4Nd3DU1Kyqp6iRnDBFd0rzPEFvyNTPPn5zpFWtJ6kF1CVm9JbqbxaST28Z1GSMkwkJUBafzEFyGA38zJ0pHT8n9jEbMSKtqn8fknlqP0pznLzv2Mx',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
