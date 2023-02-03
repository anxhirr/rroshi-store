import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux-store/cart-slice'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RedBtn } from './buttons'

const Cart = () => {
  const dispatch = useDispatch()
  const cartRef = useRef()
  const { totalPrice, totalQuantity, cartItems } = useSelector(
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
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='float-right h-full bg-white relative py-4 px-2 '>
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
              <RedBtn
                onClick={handleCart}
                buttonText='Shiko produkte të tjera'
                className='mt-5'
              />
              {/* <button type='button' className='btn' onClick={handleCart}>
                Shiko produkte të tjera
              </button> */}
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='flex gap-6 mb-5' key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt='cart item'
                  className='h-44 w-44 rounded-md bg-milk'
                />
                <div className='flex w-80 flex-col justify-between'>
                  <div className='flex items-center justify-between '>
                    <h5>{item.name}</h5>
                    <h4 className='font-bold'>{item.price} LEK</h4>
                  </div>
                  <div className='flex justify-between '>
                    <div>
                      <p className='quantity-desc border p-2 px-4 border-gray-500 flex items-center max-w-min gap-2'>
                        <span
                          className='cursor-pointer '
                          onClick={() => handleDecQuantity(item._id)}
                        >
                          <AiOutlineMinus className='text-red-600' />
                        </span>
                        <span className='px-2 border-x border-gray-500 font-bold text-lg font-monospace'>
                          {item.quantity}
                        </span>
                        <span
                          className='plus cursor-pointer'
                          onClick={() => handleIncQuantity(item._id)}
                        >
                          <AiOutlinePlus className='text-green-600' />
                        </span>
                      </p>
                    </div>
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
          <div className='absolute bottom-4 right-0 w-full px-6'>
            <div className='total'>
              <h3>Subtotal</h3>
              <h3>
                ( {totalQuantity}
                {totalQuantity > 1 ? ' Items' : ' Item'} )
              </h3>
              <h3>{totalPrice} LEK</h3>
            </div>
            <div className='btn-container'>
              <Link href='/checkout'>
                <RedBtn
                  onClick={handleCheckout}
                  buttonText='Checkout'
                  className=' w-full text-2xl mt-4'
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
