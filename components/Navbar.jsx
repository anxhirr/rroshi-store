import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux-store/cart-slice'
import { Cart } from '.'

const Navbar = () => {
  const dispatch = useDispatch()
  const { showCart, totalQuantity } = useSelector((state) => state.cart)

  const handleCart = () => {
    dispatch(cartActions.toggleCart())
  }
  return (
    <div className='main-container flex justify-between relative mb-4 text-gray-600 '>
      <p className='border-b-2 hover:border-b-2 hover:border-red-500 '>
        <Link href='/' className='text-2xl font-bold'>
          Rroshi Store
        </Link>
      </p>

      <div className='flex gap-6 items-center'>
        <Link
          href='/my-account'
          className='text-2xl cursor-pointer duration-150  hover:scale-110'
        >
          <RiAccountCircleLine />
        </Link>
        <button
          type='button'
          className='cart-icon duration-150'
          onClick={handleCart}
        >
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantity}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}
export default Navbar
