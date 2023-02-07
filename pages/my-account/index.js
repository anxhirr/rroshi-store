import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { initFirebase } from '@/firebase/firebaseApp'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import cookie from 'js-cookie'

import { FcGoogle } from 'react-icons/fc'
import { authActions } from '@/redux-store/auth-slice'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { GreenToBlueBtn, PurpleToBlueBtn } from '@/components/buttons'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebaseApp'

const MyAccount = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  const { userUID } = useSelector((state) => state.auth)
  const { isCheckingOut } = useSelector((state) => state.cart)
  const [regUserName, setRegUserName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const afterSuccessfulAuth = (user) => {
    toast.success('You are logged in')

    cookie.set('userUID', user.uid, { expires: 1 / 24 })
    dispatch(authActions.setUserUID(user.uid))

    if (isCheckingOut) {
      return router.push('/checkout')
    }

    router.replace('/my-account/profile')
  }

  const createNewUserObj = (user) => {
    console.log(user)
    const newUserObj = {
      email: user.email,
      name: user.displayName || regUserName,
    }
    return newUserObj
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      )
      const user = data.user

      if (!user) {
        toast.error('Something went wrong')
        throw new Error('Something went wrong')
      }

      await setDoc(doc(db, 'users', user.uid), createNewUserObj(user))

      afterSuccessfulAuth(user)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = await signInWithEmailAndPassword(auth, email, password)
      const user = data.user

      if (!user) {
        toast.error('Something went wrong')
        throw new Error('Something went wrong')
      }

      await setDoc(doc(db, 'users', user.uid), createNewUserObj(user))

      console.log(user)

      afterSuccessfulAuth(user)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const signInWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider)

      const user = data.user

      if (!user) {
        toast.error('Something went wrong')
        throw new Error('Something went wrong')
      }

      await setDoc(doc(db, 'users', user.uid), createNewUserObj(user))

      afterSuccessfulAuth(user)
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (userUID) {
    router.push('/my-account/profile')
  }

  return (
    <div>
      <h1 className='text-4xl font-bold mb-8 pt-12'>Krijoni nje llogari</h1>

      <div className='flex gap-10 justify-between flex-col sm:flex-row'>
        <div className='log-in flex-1'>
          <h2 className='text-3xl font-bold mb-6'>Hyrje</h2>

          <form>
            <div className='flex flex-col mb-16'>
              <label htmlFor='email' className='mb-1'>
                Emër përdoruesi ose email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                id='email'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='password' className='mb-1'>
                Fjalëkalim
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                id='password'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <div className='flex gap-6 items-center'>
                <PurpleToBlueBtn onClick={handleLogin}>Hyr</PurpleToBlueBtn>

                <Link
                  href='/my-account/forgot-password'
                  className='cursor-pointer hover:text-red-500 hover:underline'
                >
                  Harruat fjalëkalimin?
                </Link>
              </div>
            </div>
          </form>
          <div className='flex items-center mb-8'>
            <span className='flex-1 h-px bg-slate-400'></span>
            <p className='mx-4'>ose hyni me ...</p>
            <span className='flex-1 h-px bg-slate-400'></span>
          </div>
          <div className='hover:scale-105 duration-150 hover:shadow-2xl'>
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
                onChange={(e) => setRegUserName(e.target.value)}
                type='username'
                id='usename'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='reg_email' className='mb-1'>
                Adresë email
              </label>
              <input
                onChange={(e) => setRegEmail(e.target.value)}
                type='email'
                id='reg_email'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <label htmlFor='reg_password' className='mb-1'>
                Fjalëkalim
              </label>
              <input
                onChange={(e) => setRegPassword(e.target.value)}
                type='password'
                id='reg_password'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
              />

              <p className='mb-6'>
                Të dhënat tuaja personale do të përdoren vetëm për të menaxhuar
                hyrjen në llogarinë tuaj
              </p>

              <div>
                <GreenToBlueBtn onClick={handleSignUp}>
                  Rregjistrohuni
                </GreenToBlueBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MyAccount
