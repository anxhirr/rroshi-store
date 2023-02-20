'use client'

import { MouseEvent } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {
  setPhone,
  setAddress,
  setCity,
  setZip,
} from '../../redux-store/checkout-slice'
import { RootState } from '../../redux-store/store'

const SendOrderButton = () => {
  const dispatch = useDispatch()
  const { phone, address, city, zip } = useSelector(
    (state: RootState) => state.checkout
  )

  const resetInputs = () => {
    dispatch(setPhone(''))
    dispatch(setAddress(''))
    dispatch(setCity(''))
    dispatch(setZip(''))
  }

  const sendOrder = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Order sent', phone, address, city, zip)

    if ([phone, address, city, zip].some((item) => item === '')) {
      toast.error('Ju lutem plotësoni të gjitha fushat')
      return
    }

    toast.success('Porosia u krye me sukses')
    resetInputs()
  }
  return <button onClick={(e) => sendOrder(e)}>Fillo Dërgesen</button>
}
export default SendOrderButton
