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
        <div className='product-image-wrapper w-max min-h-[20rem] text-center cursor-pointer text-txt hover:scale-110 duration-150'>
          <Image
            src={urlFor(image && image[0]).url()}
            alt='product'
            width={250}
            height={500}
            className='product-image'
          />
          <p className='text-xl font-semibold'>{name}</p>
          <p className='font-extrabold text-md'>{formatToLEK(price)}</p>
        </div>
      </Link>
    </div>
  )
}
export default Product
