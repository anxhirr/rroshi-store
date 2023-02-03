import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth } from 'firebase/auth'
import { authActions } from '@/redux-store/auth-slice'
import { RedBtn } from '@/components/buttons'

const Profile = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  initFirebase()
  const auth = getAuth()

  const { regUserName, regEmail, regPassword } = useSelector(
    (state) => state.auth
  )

  const handleLogOut = () => {
    auth.signOut()
    router.push('/my-account')
    dispatch(authActions.setIsAuthenticated(false))
  }
  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-6xl'>Profile Page</h1>

      <h2 className='text-2xl'>Welcome {regUserName}</h2>

      <RedBtn buttonText='Log out' onClick={handleLogOut} />
    </div>
  )
}
export default Profile
