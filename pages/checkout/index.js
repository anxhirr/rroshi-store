import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutActions } from '@/redux-store/checkout-slice'

import { RedBtn } from '@/components/buttons'
import { formatToLEK } from '@/lib/formatCurrency'
import { toast } from 'react-hot-toast'

const Checkout = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { cartItems, subTotal } = useSelector((state) => state.cart)

  const { phone, address, city, zip } = useSelector((state) => state.checkout)

  console.log(phone, address, city, zip)

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([phone, address, city, zip].some((item) => item === '')) {
      toast.error('Ju lutem plotësoni të gjitha fushat')
      return
    }

    router.push('/checkout/success')
    dispatch(checkoutActions.setPhone(''))
    dispatch(checkoutActions.setAddress(''))
    dispatch(checkoutActions.setCity(''))
    dispatch(checkoutActions.setZip(''))
  }

  return (
    <div>
      <h1 className='text-4xl font-bold mb-8 pt-12'>Checkout</h1>

      <div className='flex flex-col md:flex-row gap-12'>
        <div className='flex-1'>
          <h2 className='text-2xl font-medium mb-6'>Detajet e faturimit</h2>
          <form className='flex-1'>
            <div className='flex flex-col mb-16 ml-2'>
              <label htmlFor='phone' className='mb-1'>
                Numri i telefonit *
              </label>
              <input
                type='text'
                // ref={phoneRef}
                id='phone'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
                onChange={(e) =>
                  dispatch(checkoutActions.setPhone(e.target.value))
                }
              />
              <label htmlFor='address' className='mb-1'>
                Adresa *
              </label>
              <input
                type='text'
                id='address'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
                // ref={addressRef}
                onChange={(e) =>
                  dispatch(checkoutActions.setAddress(e.target.value))
                }
              />
              <label htmlFor='city' className='mb-1'>
                Qyteti *
              </label>
              <input
                type='text'
                id='city'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
                onChange={(e) =>
                  dispatch(checkoutActions.setCity(e.target.value))
                }
              />
              <label htmlFor='zip' className='mb-1'>
                ZIP/Kodi postar *
              </label>
              <input
                required
                type='text'
                id='zip'
                className='mb-6 border-2 w-full h-10 rounded-md px-2'
                onChange={(e) =>
                  dispatch(checkoutActions.setZip(e.target.value))
                }
              />

              <label htmlFor='message' className='mb-1'>
                Shënime porosie (opsionale)
              </label>
              <textarea
                className='border-2 w-full h-20 rounded-md px-2'
                name='message'
                id='message'
                rows='10'
                placeholder='Shkruani shënime për porosinë tuaj, p.sh. shënime te veçanta për dërgesën.'
              ></textarea>
            </div>
          </form>
        </div>
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

          <RedBtn onClick={handleSubmit}>Fillo Dërgesën</RedBtn>
        </div>
      </div>
    </div>
  )
}
export default Checkout
