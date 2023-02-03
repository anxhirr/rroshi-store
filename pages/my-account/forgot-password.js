import { RedBtn, WhiteBtn } from '@/components/buttons'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsFillFileLock2Fill } from 'react-icons/bs'

const API_KEY = 'AIzaSyCT_v-TDTTBEZIDY6vPFeOGQf1W9jVMyQ4'

const ForgotPassword = () => {
  const [resPassEmail, setResPassEmail] = useState('')

  const [showBackToLogin, setShowBackToLogin] = useState(false)

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,

        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'PASSWORD_RESET',
            email: resPassEmail,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error.message || 'Something went wrong')
      }

      toast.success('Emaili u dërgua me sukses')
      setResPassEmail('')
      setShowBackToLogin(true)
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className='my-28'>
      <div className='max-w-lg flex flex-col gap-8 m-auto bg-milk py-16 px-8 sm:px-12 rounded-lg'>
        <BsFillFileLock2Fill className='text-7xl text-red-600 mx-auto' />

        <label
          htmlFor='email'
          className='mb-1 font-medium text-center text-gray-600'
        >
          Futni emailin, dhe ne do ju dërgojmë hapat për t`u rikthyer në
          llogarinë tuaj.
        </label>
        <input
          onChange={(e) => setResPassEmail(e.target.value)}
          placeholder='Email'
          type='email'
          id='email'
          value={resPassEmail}
          className='mb-6 border-2 w-full h-10 rounded-md px-2 py-5'
        />

        {showBackToLogin ? (
          <Link href='/my-account' className='w-full'>
            <RedBtn buttonText='Kthehu tek hyrja' className='w-full' />
          </Link>
        ) : (
          <RedBtn buttonText='Dërgo' onClick={(e) => handleResetPassword(e)} />
        )}
      </div>
    </div>
  )
}
export default ForgotPassword
