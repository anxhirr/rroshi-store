'use client'

import { signIn } from 'next-auth/react'
import { DefaultBtn } from '../../../components/buttons'

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <DefaultBtn
        onClick={() =>
          signIn('google', {
            callbackUrl: '/account',
          })
        }
      >
        Sign In
      </DefaultBtn>
    </div>
  )
}
export default Login
