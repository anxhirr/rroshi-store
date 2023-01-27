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
          <div className='image-container'>
            <img
              src={urlFor(image && image[index])}
              alt='product detail'
              className='product-detail-image'
            />
          </div>

          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                key={item._id}
                src={urlFor(item)}
                className={`small-image ${i === index ? 'selected-image' : ''}`}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
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
          <h4>Details</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc flex items-center'>
              <span className='minus' onClick={handleMinus}>
                <AiOutlineMinus />
              </span>
              <span className='num'>{quantity}</span>
              <span className='plus' onClick={handlePlus}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>
            <button
              type='button'
              className='add-to-cart'
              onClick={() => onAddToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <button type='button' className='buy-now'>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
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
