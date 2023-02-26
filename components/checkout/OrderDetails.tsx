'use client'

import { useSelector } from 'react-redux'
import { formatToLEK } from '../../lib/formatCurrency'
import { RootState } from '../../redux-store/store'

const OrderDetails = () => {
  const { cartItems, subTotal } = useSelector((state: RootState) => state.cart)

  return (
    <div className='flex-1'>
      <h2 className='text-2xl font-medium mb-6'>Detajet e dërgesës</h2>

      <div className='flex flex-col gap-3 mb-5'>
        <div className='flex justify-between text-lg font-medium'>
          <p className='border-b-2'>
            {cartItems.length === 1
              ? `${cartItems.length} Artikull `
              : `${cartItems.length} Artikuj `}
            Total
          </p>
        </div>

        <div>
          <ul className='flex flex-col gap-4 border-y-2 border-gray-400 py-2'>
            {cartItems.map((item) => (
              <li key={item._id} className='flex justify-between'>
                <p>
                  <span>{item.name} </span>
                  <span className='font-bold pl-2'> x {item.quantity}</span>
                </p>
                <p>{formatToLEK(item.price * item.quantity)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-between'>
          <h3>Subtotal</h3>
          <p> {formatToLEK(subTotal)}</p>
        </div>

        <div className='flex justify-between'>
          <h3>Transporti</h3>
          <p>{formatToLEK(300)}</p>
        </div>

        <div className='flex justify-between items-center font-bold text-lg'>
          <h3>Shuma Totale</h3>
          <p className='text-red-600 '>{formatToLEK(subTotal + 300)}</p>
        </div>
      </div>
      {/* <SendOrderButton /> */}
    </div>
  )
}
export default OrderDetails
