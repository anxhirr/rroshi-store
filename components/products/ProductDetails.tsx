'use client'

import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { QuantityBox } from '../index'
import { urlFor } from '../../lib/sanity.client'
import { formatToLEK } from '../../lib/format'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../lib/redux-store/cart-slice'
import { useRouter } from 'next/navigation'
import { ProductDataType } from '../../typings'

interface Props {
  product: ProductDataType
}

const ProductDetails = ({ product }: Props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  console.log(product)

  const { image, name, details, price } = product

  const handleMinus = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
  const handlePlus = () => setQuantity((prev) => prev + 1)

  const onAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity }))
  }

  const handleOrderNowClick = () => {
    onAddToCart(product)
    router.push('/checkout')
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
            <button
              className='alternative-btn'
              onClick={() => onAddToCart(product)}
            >
              Shto në Shportë
            </button>
            <button className='default-btn' onClick={handleOrderNowClick}>
              Porosit Tani
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails
