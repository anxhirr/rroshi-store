import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth } from 'firebase/auth'
import { authActions } from '@/redux-store/auth-slice'

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
    <div className='text-center'>
      <h1>Profile Page</h1>

      <h2>Weelcome {regUserName}</h2>

      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
export default Profile
