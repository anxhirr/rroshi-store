import { getServerSession } from 'next-auth'
import Profile from '../../../components/profile/Profile'
import {
  fetchOrdersByEmail,
  getAllOrdersByEmail,
} from '../../../lib/fetchFromSanity'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const Account = async () => {
  const { user } = await getServerSession(authOptions)
  const orders = await getAllOrdersByEmail(user.email)

  return <Profile orders={orders} />
}
export default Account
