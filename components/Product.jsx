import Link from 'next/link'

import { urlFor } from '@/lib/client'
import { useSelector } from 'react-redux'
import product from '@/sanity-store/schemas/product'

const Product = ({ product }) => {
  const { image, name, slug, price } = product

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card w-max text-center'>
          <img
            src={urlFor(image && image[0])}
            alt='product'
            width={250}
            height={250}
            className='product-image h-64'
          />

          <p className='product-name'>{name}</p>
          <p className='font-extrabold '>
            {price}
            <span className='font-medium'> LEK</span>
          </p>
        </div>
      </Link>
    </div>
  )
}
export default Product
