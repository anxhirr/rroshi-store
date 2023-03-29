'use client'

import { AiOutlineShopping } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, toggleCart } from '../../lib/redux-store/cart-slice'
import Cart from '../cart/Cart'

const ChartButton = () => {
  const dispatch = useDispatch()
  const { showCart, totalQuantity } = useSelector(selectState)

  const handleCart = () => {
    dispatch(toggleCart())
  }

  return (
    <>
      <button
        type='button'
        className='relative font-bold text-2xl hover:scale-110 duration-150'
        onClick={handleCart}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty absolute top-0 h-4 w-4 bg-red-600 text-white font-semibold text-center rounded-full text-xs '>
          {totalQuantity}
        </span>
      </button>
      {/* {showCart && <Cart />} */}
      <Cart showCart={showCart} />
    </>
  )
}
export default ChartButton
