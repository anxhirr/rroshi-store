'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AlternativeBtn } from '../../../components/buttons'

const Account = () => {
  const { data: user, _ } = useSession()
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <div>
      <div className='flex gap-8 items-center justify-center'>
        <Image
          src={user.user.image}
          width={50}
          height={50}
          alt={user.user.name}
          className='rounded-full'
        />
        <h1 className='text-center font-bold text-4xl text-gray-600'>
          Profili, {user.user.name}
        </h1>
        <AlternativeBtn onClick={() => signOut()}>Dilni</AlternativeBtn>
      </div>
      <div className='mt-5 text-center'>
        <p>Produktet ne shporte: {cartItems.length}</p>
        <p>Ordera te krijuar: 0</p>
      </div>
    </div>
  )
}
export default Account
