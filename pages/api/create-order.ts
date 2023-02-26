import { createOrderInSanity } from '../../lib/createInSanity'

export default async function handler(req, res) {
  if (req.method !== 'POST') return
  const { userEmail, cartItems } = req.body

  const order = {
    userEmail,
    cartItems,
    createdAt: new Date().toISOString(),
  }

  console.log('order', order)

  try {
    await createOrderInSanity(order)
    res.status(200).json({ message: 'Order created' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' })
  }
}
