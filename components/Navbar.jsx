import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
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
    <div className='lg:container lg:px-2 m-auto flex justify-between relative mb-4 '>
      <p className='logo border-b-2 hover:border-b-2 hover:border-red-500 '>
        <Link href='/' className='text-2xl'>
          Rroshi Store
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={handleCart}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}
export default Navbar
