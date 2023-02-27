import Order from './Order'

const OrdersList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  )
}
export default OrdersList
