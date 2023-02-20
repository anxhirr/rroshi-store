'use client'

import { signOut } from 'next-auth/react'

const Account = () => {
  return (
    <div>
      Account
      <button onClick={() => signOut()}>Dilni</button>
    </div>
  )
}
export default Account
