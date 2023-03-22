import Image from 'next/image'
import Link from 'next/link'
import { formatToLEK, formatDate } from '../../lib/format'
import DeleteOrderBtn from './DeleteOrderBtn'

const Order = ({ order, setInStateOrders }) => {
  console.log(order)
  return (
    <div className='border border-red-100 p-5 rounded-lg bg-slate-300 mt-4'>
      <div>
        {order.products.map(({ product, quantity }) => {
          const { slug, name, price, _id } = product
          return (
            <div className='flex gap-4' key={_id}>
              <div>
                <Link href={`/product/${slug.current}`}>
                  <Image
                    src={product.image.asset.url}
                    alt={name}
                    width={250}
                    height={250}
                    className='product-image'
                  />
                </Link>
              </div>
              <div className='flex flex-col justify-center'>
                <p>Emri: {name}</p>
                <p> Cmimi: {price}</p>
                <p> Data: {formatDate(order.created_at)}</p>
                <p>Sasia: {quantity}</p>
                <p>Totali {formatToLEK(order.total)}</p>
                <div className='my-5'>
                  <DeleteOrderBtn
                    id={order._id}
                    setInStateOrders={setInStateOrders}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Order
