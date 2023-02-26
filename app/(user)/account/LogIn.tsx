'use client'

import { signIn } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { DefaultBtn } from '../../../components/buttons'
import { RootState } from '../../../redux-store/store'

const Login = () => {
  const { isCheckingOut } = useSelector((state: RootState) => state.cart)
  return (
    <div className='grid place-items-center'>
      <DefaultBtn
        onClick={() =>
          signIn('google', {
            callbackUrl: isCheckingOut ? '/checkout' : '/account',
          })
        }
      >
        Sign In
      </DefaultBtn>
    </div>
  )
}
export default Login
