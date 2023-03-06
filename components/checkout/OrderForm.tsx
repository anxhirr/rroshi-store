'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/redux-store/store'
import { orderDataType } from '../../typings'
import { GreenToBlueBtn } from '../../components/buttons'

const sendOrderToSanity = async (orderData: orderDataType, router) => {
  try {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    if (!response.ok) {
      throw new Error('Something went wrong!')
    }
    const data = await response.json()
    toast.success(data.message)
    router.push('/checkout/success')
  } catch (error) {
    toast.error(error.message)
  }
}

const OrderForm = () => {
  const router = useRouter()
  const telephoneRef = useRef(null)
  const addressRef = useRef(null)
  const cityRef = useRef(null)
  const zipRef = useRef(null)

  const { data: user, status } = useSession()
  const { cartItems, subTotal } = useSelector((state: RootState) => state.cart)

  const onSubmit = (e) => {
    e.preventDefault()
    const orderData = {
      cartItems,
      userEmail: user?.user?.email,
      total: subTotal,
      telephone: telephoneRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zip: zipRef.current.value,
    }

    sendOrderToSanity(orderData, router)
  }

  return (
    <form className='flex-1' onSubmit={(e) => onSubmit(e)}>
      <div className='flex flex-col mb-10 ml-2'>
        <label htmlFor='phone' className='mb-1'>
          Numri i telefonit *
        </label>
        <input type='tel' id='phone' className='input' ref={telephoneRef} />
        <label htmlFor='address' className='mb-1'>
          Adresa *
        </label>
        <input type='text' id='address' className='input' ref={addressRef} />
        <label htmlFor='city' className='mb-1'>
          Qyteti *
        </label>
        <input type='text' id='city' className='input' ref={cityRef} />
        <label htmlFor='zip' className='mb-1'>
          ZIP/Kodi postar *
        </label>
        <input required type='text' id='zip' className='input' ref={zipRef} />
        <label htmlFor='message' className='mb-1'>
          Shënime porosie (opsionale)
        </label>
        <textarea
          className='border-2 w-full h-20 rounded-md px-2'
          name='message'
          id='message'
          placeholder='Shkruani shënime për porosinë tuaj, p.sh. shënime te veçanta për dërgesën.'
        ></textarea>
      </div>
      <GreenToBlueBtn>Fillo dergesen</GreenToBlueBtn>
    </form>
  )
}
export default OrderForm
