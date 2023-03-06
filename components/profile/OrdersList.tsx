import Order from './Order'

const OrdersList = ({ orders }) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  )
}
export default OrdersList
