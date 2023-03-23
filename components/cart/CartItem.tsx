import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { formatToLEK } from '../../lib/format'
import { urlFor } from '../../lib/sanity.client'
import { CartItem } from '../../typings'

interface Props {
  cartItem: CartItem
  handleRemoveItem: (id: string) => void
}

const CartItem = ({ cartItem, handleRemoveItem }: Props) => {
  const router = useRouter()

  return (
    <li key={cartItem._id} className='flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <Image
          src={urlFor(cartItem.image[0]).url()}
          alt={cartItem.name}
          className='h-full w-full object-cover object-center'
          width={100}
          height={100}
          onClick={() => router.push(`/product/${cartItem.slug.current}`)}
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <div>{cartItem.name}</div>
            </h3>
            <p className='ml-4'>{formatToLEK(cartItem.price)}</p>
          </div>
          {/* <p className='mt-1 text-sm text-gray-500'>{product.color}</p> */}
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <p className='text-gray-500'>Quantity: {cartItem.quantity}</p>

          <div className='flex'>
            <button
              type='button'
              className='font-medium text-indigo-600 hover:text-indigo-500'
              onClick={() => handleRemoveItem(cartItem._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default CartItem
