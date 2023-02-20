'use client'

import { useDispatch } from 'react-redux'
import {
  setPhone,
  setAddress,
  setCity,
  setZip,
} from '../../redux-store/checkout-slice'

const CheckoutDetails = () => {
  const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if ([phone, address, city, zip].some((item) => item === '')) {
  //     toast.error('Ju lutem plotësoni të gjitha fushat')
  //     return
  //   }

  //   const createOrder = async () => {
  //     const order = {
  //       items: cartItems,
  //       date: new Date().toLocaleDateString(),
  //       total: subTotal + 300,
  //       status: 'pending',
  //       phone,
  //       address,
  //       city,
  //       zip,
  //     }
  //     const userOrdersCollection = collection(db, 'users', userUID, 'orders')

  //     await addDoc(userOrdersCollection, order)
  //   }
  //   createOrder()

  //   router.push('/checkout/success')
  //   toast.success('Porosia u krye me sukses')
  //   setPhone('')
  //   setAddress('')
  //   setCity('')
  //   setZip('')
  // }

  return (
    <div className='flex-1'>
      <h2 className='text-2xl font-medium mb-6'>Detajet e faturimit</h2>
      <form className='flex-1'>
        <div className='flex flex-col mb-16 ml-2'>
          <label htmlFor='phone' className='mb-1'>
            Numri i telefonit *
          </label>
          <input
            type='tel'
            id='phone'
            className='input'
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
          <label htmlFor='address' className='mb-1'>
            Adresa *
          </label>
          <input
            type='text'
            id='address'
            className='input'
            onChange={(e) => dispatch(setAddress(e.target.value))}
          />
          <label htmlFor='city' className='mb-1'>
            Qyteti *
          </label>
          <input
            type='text'
            id='city'
            className='input'
            onChange={(e) => dispatch(setCity(e.target.value))}
          />
          <label htmlFor='zip' className='mb-1'>
            ZIP/Kodi postar *
          </label>
          <input
            required
            type='text'
            id='zip'
            className='input'
            onChange={(e) => dispatch(setZip(e.target.value))}
          />

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
      </form>
    </div>
  )
}
export default CheckoutDetails
