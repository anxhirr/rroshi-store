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
import { TiDeleteOutline } from 'react-icons/ti'

const Cart = () => {
  const dispatch = useDispatch()
  const cartRef = useRef()
  const { totalPrice, totalQuantity, cartItems } = useSelector(
    (state) => state.cart
  )

  console.log(totalPrice, totalQuantity, cartItems)

  const handleCart = () => {
    dispatch(cartActions.toggleCart())
  }

  const handleRemoveItem = (id) => {
    console.log(id)
    dispatch(cartActions.removeItemFromCart(id))
  }

  const handleIncQuantity = (id) => {
    dispatch(cartActions.incCartItemQuantity(id))
  }
  const handleDecQuantity = (id) => {
    dispatch(cartActions.decCartItemQuantity(id))
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={handleCart}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantity})</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href='/'>
              <button type='button' className='btn' onClick={handleCart}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {console.log(cartItems)}
          {cartItems.length >= 1 &&
            cartItems.map((item, i) => (
              <div className='product' key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt='cart item'
                  className='cart-product-image'
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price * item.quantity}</h4>
                  </div>
                  <div className='flex bottom '>
                    <div>
                      <p className='quantity-desc flex items-center max-w-min'>
                        <span
                          className='minus'
                          onClick={() => handleDecQuantity(item._id)}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className='num'>{item.quantity}</span>
                        <span
                          className='plus'
                          onClick={() => handleIncQuantity(item._id)}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type='button'
                      className='remove-item'
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn'>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
