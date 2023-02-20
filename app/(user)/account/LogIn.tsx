'use client'

import { signIn } from 'next-auth/react'
import { DefaultBtn } from '../../../components/buttons'

const Login = () => {
  return (
    <div className='h-full'>
      <div className='grid  place-items-center'>
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
    </div>
  )
}
export default Login
