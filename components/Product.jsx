import Link from 'next/link'

import { urlFor } from '@/lib/client'
import { useSelector } from 'react-redux'
import product from '@/sanity-store/schemas/product'

const Product = ({ product }) => {
  const { image, name, slug, price } = product
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            alt='product'
            width={250}
            height={250}
            className='product-image'
          />

          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}
export default Product
