import { useState } from 'react'
import Order from './Order'

const OrdersList = ({ orders }) => {
  const [inStateOrders, setInStateOrders] = useState(orders || [])
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      {inStateOrders.map((order) => (
        <Order
          key={order._id}
          order={order}
          setInStateOrders={setInStateOrders}
        />
      ))}
    </div>
  )
}
export default OrdersList
