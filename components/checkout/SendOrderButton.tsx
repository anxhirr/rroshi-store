'use client'

import { useSession } from 'next-auth/react'
import { MouseEvent } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { client } from '../../lib/sanity.client'
import {
  setPhone,
  setAddress,
  setCity,
  setZip,
} from '../../redux-store/checkout-slice'
import { RootState } from '../../redux-store/store'

const SendOrderButton = () => {
  const dispatch = useDispatch()
  // const { data: user, status } = useSession()
  const { phone, address, city, zip } = useSelector(
    (state: RootState) => state.checkout
  )

  // const { cartItems, subTotal } = useSelector((state: RootState) => state.cart)

  // console.log('cartItems', cartItems)

  const resetInputs = () => {
    dispatch(setPhone(''))
    dispatch(setAddress(''))
    dispatch(setCity(''))
    dispatch(setZip(''))
  }

  const orderData = {
    customerPhone: phone,
    customerAddress: address,
    customerCity: city,
    customerZip: zip,
    // products: [
    //   {
    //     _ref: 'a2bf26d0-b157-4194-be77-a46b997d2942',
    //   },
    // ],

    // total: subTotal,
    // orderDate: new Date().toISOString(),
    // status: 'pending',
  }

  const createOrder = async (order) => {
    const result = await client.create({
      _type: 'orders',
      name: 'anxhi',
    })
    console.log('result', result)
  }

  const sendOrder = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Order sent', phone, address, city, zip)

    if ([phone, address, city, zip].some((item) => item === '')) {
      toast.error('Ju lutem plotësoni të gjitha fushat')
      return
    }

    createOrder(orderData)

    toast.success('Porosia u krye me sukses')
    resetInputs()
  }
  return <button onClick={(e) => sendOrder(e)}>Fillo Dërgesen</button>
}
export default SendOrderButton
