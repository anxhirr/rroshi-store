'use client'

import { signOut } from 'next-auth/react'
import { AlternativeBtn } from '../../../components/buttons'

const Account = () => {
  return (
    <div>
      Account
      <AlternativeBtn onClick={() => signOut()}>Dilni</AlternativeBtn>
    </div>
  )
}
export default Account
