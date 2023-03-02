import Image from 'next/image'
import Link from 'next/link'
import { formatToLEK } from '../../lib/formatCurrency'

const Order = ({ order }) => {
  return (
    <div className='border border-red-100 p-10 mt-4'>
      <div>
        <p> Koha: {order.created_at.toLocaleString()}</p>
        {order.products.map(({ product, quantity }) => {
          const { slug, name, price, _id } = product
          return (
            <div key={_id}>
              <div>
                <Image
                  src={product.image.asset.url}
                  alt={name}
                  width={250}
                  height={250}
                  className='product-image'
                />
              </div>
              <div>
                <p>Emri: {name}</p>
                <p> Cmimi: {price}</p>
                <p>Sasia: {quantity}</p>
                <div className='my-5'>
                  <Link
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    href={`/product/${slug.current}`}
                  >
                    Shko te produkti
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <p>Totali {formatToLEK(order.total)}</p>
    </div>
  )
}
export default Order
