'use client'

import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import {
  toggleCart,
  removeItemFromCart,
  setIsCheckingOut,
  selectState,
} from '../../lib/redux-store/cart-slice'
import { formatToLEK } from '../../lib/format'
import CartItem from './CartItem'
import { BsFillCartXFill } from 'react-icons/bs'

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { data: user, status } = useSession()
  const { cartItems, subTotal, showCart } = useSelector(selectState)

  const closeCart = () => dispatch(toggleCart())
  // const handleIncQuantity = (id: string) => dispatch(incCartItemQuantity(id))
  // const handleDecQuantity = (id: string) => dispatch(decCartItemQuantity(id))
  const handleRemoveItem = (id: string) => dispatch(removeItemFromCart(id))
  const handleItemClick = (id: string) => {
    dispatch(toggleCart())
    router.push(`/product/${id}`)
  }

  const handleCheckout = () => {
    dispatch(toggleCart())
    dispatch(setIsCheckingOut(true))
    if (user) router.push('/checkout')
    if (!user) router.push('/account')
  }

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto pb-6 pt-3 px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shporta ({cartItems.length})
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={closeCart}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          {cartItems.length === 0 && (
                            <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                              <BsFillCartXFill className='h-12 w-12 text-gray-500' />
                              <p className='text-sm font-medium text-gray-900'>
                                Your cart is empty
                              </p>
                            </div>
                          )}
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {cartItems.map((cartItem) => (
                              <CartItem
                                handleItemClick={handleItemClick}
                                handleRemoveItem={handleRemoveItem}
                                cartItem={cartItem}
                                key={cartItem._id}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 pt-6 pb-3 px-4 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>{formatToLEK(subTotal)}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-4'>
                        <button
                          role='link'
                          onClick={handleCheckout}
                          className='default-btn w-full'
                        >
                          Checkout
                        </button>
                      </div>
                      <div className='mt-2 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or{' '}
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                            onClick={closeCart}
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Cart
