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
      <div className='flex flex-col sm:flex-row gap-10 m-5 md:m-10 text-txt border-b-2 pb-10 border-r-gray-900'>
        <div>
          <div className='w-72 h-72 lg:w-80 lg:h-80'>
            <Image
              src={urlFor(image && image[index]).url()}
              alt='product detail'
              className='product-image'
              width={500}
              height={500}
              priority
            />
          </div>

          <div className='flex mt-5 gap-5'>
            {image?.map((item, i) => (
              <Image
                key={item._key}
                src={urlFor(item).url()}
                alt='product detail'
                className={`product-image ${i === index ? 'bg-red-600' : ''}`}
                width={65}
                height={65}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-medium'>{name}</h1>
          <div className='text-red-600 my-2'>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className='font-medium my-2'>Detajet</h4>
          <p className='my-2'>{details}</p>
          <div className='mt-5'>
            <h4 className='font-medium'>Cmimi</h4>
            <p className='text-red-500 font-bold text-2xl'>
              {formatToLEK(price)}
            </p>
          </div>
          <div className='mt-2 flex gap-5 justify-start items-center'>
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
