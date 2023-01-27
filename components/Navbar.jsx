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
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Rroshi Headphones</Link>
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
