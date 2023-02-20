'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { AlternativeBtn, DefaultBtn } from './buttons'
import QuantityBox from './QuantityBox'
import { urlFor } from '../lib/sanity.client'
import { formatToLEK } from '../lib/formatCurrency'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux-store/cart-slice'

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { image, name, details, price } = product

  const handleMinus = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
  }
  const handlePlus = () => {
    setQuantity((prev) => prev + 1)
  }

  const onAddToCart = (product) => {
    dispatch(cartActions.addItemToCart({ ...product, quantity }))
  }

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='w-72 h-72 lg:w-80 lg:h-80'>
            <Image
              src={urlFor(image && image[index]).url()}
              alt='product detail'
              className='product-detail-image'
              width={500}
              height={500}
              priority
            />
          </div>

          <div className='small-images-container'>
            {image?.map((item, i) => (
              <Image
                key={item._key}
                src={urlFor(item).url()}
                alt='product detail'
                className={`small-image ${i === index ? 'selected-image' : ''}`}
                width={65}
                height={65}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1 className='text-3xl font-medium'>{name}</h1>
          <div className='reviews'>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className='font-medium'>Detajet</h4>
          <p>{details}</p>
          <div className='mt-5'>
            <h4 className='font-medium'>Cmimi</h4>
            <p className='text-red-500 font-bold text-2xl'>
              {formatToLEK(price)}
            </p>
          </div>
          <div className='quantity '>
            <h3 className='font-medium'>Quantity:</h3>
            <QuantityBox
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              quantity={quantity}
            />
          </div>
          <div className='flex gap-5 mt-8'>
            <AlternativeBtn onClick={() => onAddToCart(product)}>
              Shto në Shportë
            </AlternativeBtn>
            <Link href='/checkout'>
              <DefaultBtn>Porosit Tani</DefaultBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails
