import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import { FcGoogle } from 'react-icons/fc'
import { authActions } from '@/redux-store/auth-slice'
import { toast } from 'react-hot-toast'

const API_KEY = 'AIzaSyCT_v-TDTTBEZIDY6vPFeOGQf1W9jVMyQ4'

const MyAccount = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const [user, loading, error] = useAuthState(auth)

  const { isAuthenticated, regEmail, regPassword, email, password } =
    useSelector((state) => state.auth)

  const handleLoginAndSignUp = async (e) => {
    e.preventDefault()
    let isLogIn = false

    if (e.target.innerHTML === 'Hyr') {
      isLogIn = true
    }

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${
      isLogIn ? 'signInWithPassword' : 'signUp'
    }?key=${API_KEY}`

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: isLogIn ? email : regEmail,
          password: isLogIn ? password : regPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()
      console.log(data)

      if (!res.ok) {
        throw new Error(data.error.message || 'Something went wrong')
      }

      if (isLogIn) {
        toast.success('You are logged in')
        console.log('User logged in')
        router.push('/my-account/profile')
        dispatch(authActions.setIsAuthenticated(true))

        // dispatch(authActions.setRegUserName(data.displayName))
      } else {
        toast.success('You are registered, now you can log in')
        console.log('User created')
      }

      dispatch(authActions.setEmail(''))
      dispatch(authActions.setPassword(''))
      dispatch(authActions.setRegUserName(''))
      dispatch(authActions.setRegEmail(''))
      dispatch(authActions.setRegPassword(''))
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  // const handleNewUserReg = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const res = await fetch(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           email: regEmail,
  //           password: regPassword,
  //           returnSecureToken: true,
  //         }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )

  //     const data = await res.json()
  //     console.log(data)

  //     if (!res.ok) {
  //       throw new Error(data.error.message || 'Something went wrong')
  //     }

  //     router.push('/my-account/profile')

  //     dispatch(authActions.setIsAuthenticated(true))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleLogIn = async (e) => {
  //   e.preventDefault()
  //   console.log(email)

  //   try {
  //     const res = await fetch(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           email,
  //           password,
  //           returnSecureToken: true,
  //         }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )

  //     const data = await res.json()
  //     console.log(data)

  //     if (!res.ok) {
  //       throw new Error(data.error.message || 'Something went wrong')
  //     }

  //     router.push('/my-account/profile')

  //     dispatch(authActions.setIsAuthenticated(true))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (user || isAuthenticated) {
    router.push('/my-account/profile')
  }

  return (
    <div>
      <h1 className='text-4xl font-bold mb-8 pt-12 '>My Account</h1>

      <div className='flex gap-10 justify-between flex-col sm:flex-row'>
        <div className='log-in flex-1'>
          <h2 className='text-3xl font-bold mb-6'>Hyrje</h2>

          <form>
            <div className='flex flex-col mb-16'>
              <label htmlFor='email' className='mb-1'>
                Emër përdoruesi ose email
              </label>
              <input
                onChange={(e) => dispatch(authActions.setEmail(e.target.value))}
                type='email'
                id='email'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='password' className='mb-1'>
                Fjalëkalim
              </label>
              <input
                onChange={(e) =>
                  dispatch(authActions.setPassword(e.target.value))
                }
                type='password'
                id='password'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <div className='flex gap-6 items-center'>
                <button
                  type='submit'
                  className='button red'
                  onClick={handleLoginAndSignUp}
                >
                  Hyr
                </button>

                <a className='cursor-pointer hover:text-red-500'>
                  Harruat fjalëkalimin?
                </a>
              </div>
            </div>
          </form>
          <div className='flex items-center mb-8'>
            <span className='flex-1 h-px bg-slate-400'></span>
            <p className='mx-4'>ose hyni me ...</p>
            <span className='flex-1 h-px bg-slate-400'></span>
          </div>
          <div>
            <button
              className='border-2 flex justify-between w-full items-center p-4 rounded-xl'
              onClick={signInWithGoogle}
            >
              <FcGoogle className='w-5 h-5' />
              <span className='font-medium text-xl'>Google</span>
              <span></span>
            </button>
          </div>
        </div>
        <div className='sign-up flex-1'>
          <h2 className='text-3xl font-bold mb-6 '>Regjistrohu</h2>

          <form>
            <div className='flex flex-col '>
              <label htmlFor='usename' className='mb-1'>
                Emër përdoruesi
              </label>
              <input
                onChange={(e) =>
                  dispatch(authActions.setRegUserName(e.target.value))
                }
                type='username'
                id='usename'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='reg_email' className='mb-1'>
                Adresë email
              </label>
              <input
                onChange={(e) =>
                  dispatch(authActions.setRegEmail(e.target.value))
                }
                type='email'
                id='reg_email'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='reg_password' className='mb-1'>
                Fjalëkalim
              </label>
              <input
                onChange={(e) =>
                  dispatch(authActions.setRegPassword(e.target.value))
                }
                type='password'
                id='reg_password'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <p className='mb-6'>
                Të dhënat tuaja personale do të përdoren vetëm për të menaxhuar
                hyrjen në llogarinë tuaj
              </p>

              <div>
                <button
                  type='submit'
                  className='button red'
                  onClick={handleLoginAndSignUp}
                >
                  Rregjistrohuni
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MyAccount
