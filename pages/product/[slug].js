import { urlFor, client } from '@/lib/client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/redux-store/cart-slice'

import Product from '../../components/Product'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'
import Link from 'next/link'
import { AlternativeBtn, DefaultBtn } from '@/components/buttons'

const ProductDetails = ({ product, products }) => {
  const dispatch = useDispatch()
  const { image, name, details, price } = product

  const [index, setIndex] = useState(0)

  const { quantity, cartItems } = useSelector((state) => state.cart)

  const handleMinus = () => {
    dispatch(cartActions.decQuantity())
  }
  const handlePlus = () => {
    dispatch(cartActions.incQuantity())
  }

  const onAddToCart = (product, quantity) => {
    dispatch(cartActions.addItemToCart({ ...product, quantity }))

    console.log(cartItems)
  }

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='w-72 h-72 lg:w-80 lg:h-80'>
            <img
              src={urlFor(image && image[index])}
              alt='product detail'
              className='product-detail-image'
            />
          </div>

          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                key={item._key}
                src={urlFor(item)}
                className={`small-image ${i === index ? 'selected-image' : ''}`}
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
            <p>
              <span className='text-red-500 font-bold text-2xl'>{price}</span>
              <span className='font-medium text-lg'> LEK</span>
            </p>
          </div>
          <div className='quantity '>
            <h3 className='font-medium'>Quantity:</h3>
            <p className='quantity-desc border p-3 px-5 border-gray-500 flex items-center max-w-min gap-2'>
              <span className='cursor-pointer' onClick={handleMinus}>
                <AiOutlineMinus className='text-red-600' />
              </span>
              <span className='px-2 border-x border-gray-500 font-bold text-lg font-monospace'>
                {quantity}
              </span>
              <span className='cursor-pointer' onClick={handlePlus}>
                <AiOutlinePlus className='text-green-600' />
              </span>
            </p>
          </div>
          <div className='flex gap-5 mt-8'>
            <AlternativeBtn
              buttonText='Shto në Shportë'
              className=''
              onClick={() => onAddToCart(product, quantity)}
            />
            <Link href='/checkout'>
              <DefaultBtn buttonText='Porosit Tani' />
            </Link>
          </div>
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>Produkte të ngjashme</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"] {
    slug {
      current
    }
  }
  `
  const products = await client.fetch(productsQuery)

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(productQuery)
  const products = await client.fetch(productsQuery)

  return {
    props: {
      product,
      products,
    },
  }
}

export default ProductDetails
