import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity.client'
import { formatToLEK } from '../../lib/format'
import { ProductDataType } from '../../typings'

interface Props {
  product: ProductDataType
}

const Product = ({ product }: Props) => {
  const { image, name, slug, price } = product

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card w-max text-center'>
          <Image
            src={urlFor(image && image[0]).url()}
            alt='product'
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='font-extrabold '>{formatToLEK(price)}</p>
        </div>
      </Link>
    </div>
  )
}
export default Product
