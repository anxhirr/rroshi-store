import { createOrderInSanity } from '../../lib/createInSanity'

export default async function handler(req, res) {
  if (req.method !== 'POST') return

  const order = {
    ...req.body,
  }

  try {
    await createOrderInSanity(order)
    res.status(200).json({ message: 'Porosia u dërgua me sukses!' })
  } catch (error) {
    res.status(500).json({ message: 'Probleme me krijimin e porosisë' })
  }
}
