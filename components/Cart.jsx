'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../lib/redux-store/cart-slice'
import { urlFor } from '../lib/sanity.client'
import { formatToLEK } from '../lib/format'

import { RedBtn } from './buttons'
import { QuantityBox } from './index'

import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Cart = ({ showCart }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: user, status } = useSession()
  const { subTotal, totalQuantity, cartItems } = useSelector(
    (state) => state.cart
  )

  const handleCart = () => {
    dispatch(cartActions.toggleCart())
  }

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const handleIncQuantity = (id) => {
    dispatch(cartActions.incCartItemQuantity(id))
  }
  const handleDecQuantity = (id) => {
    dispatch(cartActions.decCartItemQuantity(id))
  }

  const handleCheckout = () => {
    dispatch(cartActions.toggleCart())
    dispatch(cartActions.setIsCheckingOut(true))

    if (user) {
      router.push('/checkout')
    }

    if (!user) {
      router.push('/account')
    }
  }

  return (
    <div
      className={`w-full h-full fixed left-0 top-0 z-50 pointer-events-none transition-all duration-300 ${
        showCart ? 'pointer-events-auto backdrop-blur-[1px] bg-black/30' : ''
      }`}
    >
      <div
        className={`cart-container min-w-min md:min-w-fit ${
          showCart ? 'show' : ''
        }`}
      >
        <button
          type='button'
          className='flex items-center gap-2 text-xl font-medium'
          onClick={handleCart}
        >
          <AiOutlineLeft />
          <span className='hover:underline'>Shporta</span>
          <span className='text-red-600'>({totalQuantity})</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} className='m-auto' />
            <h3>Shporta juaj është bosh</h3>
            <Link href='/'>
              <RedBtn onClick={handleCart} className='mt-5'>
                Shiko produkte të tjera
              </RedBtn>
            </Link>
          </div>
        )}

        <div className='py-5 px-2'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='flex gap-6 mb-5' key={item._id}>
                <Link
                  href={`/product/${item.slug.current}`}
                  onClick={handleCart}
                >
                  <Image
                    src={urlFor(item?.image[0]).url()}
                    alt='cart item'
                    className='w-44 rounded-md bg-milk hover:bg-red-600 cursor-pointer'
                    width={100}
                    height={100}
                  />
                </Link>
                <div className='flex w-72 flex-col justify-between font-bold'>
                  <div className='flex items-center justify-between '>
                    <h5 className='text-2xl'>{item.name}</h5>
                    <h4 className='font-bold'>{formatToLEK(item.price)}</h4>
                  </div>

                  <div className='flex items-center justify-between'>
                    <h5 className='text-md font-bold'>
                      <span>Total: </span>
                      <span className='text-red-500'>
                        {formatToLEK(item.price * item.quantity)}
                      </span>
                    </h5>
                  </div>

                  <div className='flex justify-between '>
                    <QuantityBox
                      handleMinus={() => handleDecQuantity(item._id)}
                      quantity={item.quantity}
                      handlePlus={() => handleIncQuantity(item._id)}
                    />
                    <button
                      type='button'
                      className='remove-item'
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <RiDeleteBin6Line className='text-gray-600 text-2xl hover:text-red-600 hover:scale-110' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='absolute bg-white bottom-4 right-0 w-full px-6'>
            <div className='total'>
              <h3>Subtotal</h3>
              <h3>
                ( {totalQuantity}
                {totalQuantity > 1 ? ' Items' : ' Item'} )
              </h3>
              <h3>{formatToLEK(subTotal)}</h3>
            </div>
            <div className='btn-container'>
              <RedBtn
                onClick={handleCheckout}
                className=' w-full text-2xl mt-4'
              >
                Checkout
              </RedBtn>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
