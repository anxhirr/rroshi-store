import { getServerSession } from 'next-auth'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import Login from './LogIn'

const AuthLayout = async ({ children }) => {
  const session = await getServerSession(authOptions)

  return !session ? <Login /> : children
}
export default AuthLayout
