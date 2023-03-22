'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectState } from '../../lib/redux-store/cart-slice'
import OrdersList from './OrdersList'

const Profile = ({ orders }) => {
  const {
    data: { user },
    status,
  } = useSession()

  const { cartItems } = useSelector(selectState)

  return (
    <div>
      <div className='flex gap-8 items-center justify-center'>
        <Image
          src={user.image}
          width={50}
          height={50}
          alt={user.name}
          className='rounded-full'
        />
        <h1 className='text-center font-bold text-4xl text-gray-600'>
          Profili, {user.name}
        </h1>
        <button className='alternative-btn' onClick={() => signOut()}>
          Dilni
        </button>
      </div>
      <div className='mt-5 text-center'>
        <p>Produktet ne shporte: {cartItems.length}</p>
        <div>
          <p>Ordera te krijuar: {orders.length}</p>
          <OrdersList orders={orders} />
        </div>
      </div>
    </div>
  )
}
export default Profile
