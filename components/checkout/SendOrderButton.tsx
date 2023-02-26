'use client'

import { useSession } from 'next-auth/react'
import { MouseEvent } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { createOrderInSanity } from '../../lib/createInSanity'
import {
  setPhone,
  setAddress,
  setCity,
  setZip,
} from '../../redux-store/checkout-slice'
import { RootState } from '../../redux-store/store'

const SendOrderButton = () => {
  const dispatch = useDispatch()
  const { data: user, status } = useSession()

  // console.log('user', user)

  const { phone, address, city, zip } = useSelector(
    (state: RootState) => state.checkout
  )

  const { cartItems } = useSelector((state: RootState) => state.cart)

  const resetInputs = () => {
    dispatch(setPhone(''))
    dispatch(setAddress(''))
    dispatch(setCity(''))
    dispatch(setZip(''))
  }

  const orderData = {
    cartItems,
    userEmail: user?.user?.email,
  }

  const sendOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // console.log('Order sent', phone, address, city, zip)

    // if ([phone, address, city, zip].some((item) => item === '')) {
    //   toast.error('Ju lutem plotësoni të gjitha fushat')
    //   return
    // }

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const data = await response.json()
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }

    toast.success('Porosia u krye me sukses')
    resetInputs()
  }
  return <button onClick={(e) => sendOrder(e)}>Fillo Dërgesen</button>
}
export default SendOrderButton
