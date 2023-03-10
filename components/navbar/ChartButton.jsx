'use client'

import { AiOutlineShopping } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../lib/redux-store/cart-slice'
import Cart from '../Cart'

const ChartButton = () => {
  const dispatch = useDispatch()
  const { showCart, totalQuantity } = useSelector((state) => state.cart)

  const handleCart = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <>
      <button
        type='button'
        className='cart-icon duration-150'
        onClick={handleCart}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      {/* {showCart && <Cart />} */}
      <Cart showCart={showCart} />
    </>
  )
}
export default ChartButton
