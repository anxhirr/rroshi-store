import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth } from 'firebase/auth'
import { authActions } from '@/redux-store/auth-slice'
import { RedBtn } from '@/components/buttons'
import { toast } from 'react-hot-toast'

const Profile = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  initFirebase()
  const auth = getAuth()

  console.log('auth', auth)

  const { regUserName } = useSelector((state) => state.auth)

  const handleLogOut = () => {
    auth.signOut()
    router.push('/my-account')
    dispatch(authActions.setIsAuthenticated(false))
    toast.success('You have been logged out')
  }
  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-6xl'>Profile Page</h1>

      <h2 className='text-2xl'>Welcome {regUserName}</h2>

      <RedBtn onClick={handleLogOut}>Log out</RedBtn>
    </div>
  )
}
export default Profile
