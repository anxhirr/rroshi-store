import { signOut } from 'next-auth/react'

const Profile = () => {
  return (
    <div>
      Profile
      <button onClick={() => signOut()}>Dilni</button>
    </div>
  )
}
export default Profile
