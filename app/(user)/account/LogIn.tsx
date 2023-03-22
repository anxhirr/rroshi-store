'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <button
        className='default-btn'
        onClick={() =>
          signIn('google', {
            callbackUrl: '/account',
          })
        }
      >
        Sign In
      </button>
    </div>
  )
}
export default Login
