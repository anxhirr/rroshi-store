import { groq } from 'next-sanity'
import { client } from '../../../lib/sanity.client'

export default async function handler(req, res) {
  const { id } = req.body

  try {
    const query = groq`*[_type == "order" && _id == $id][0]`
    const result = await client.fetch(query, { id })
    if (!result) throw new Error('Order not found')

    await client.delete(id)
    res.status(200).json({ message: 'Order deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Something went wrong' })
  }
}
