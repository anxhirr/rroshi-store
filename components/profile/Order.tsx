const Order = ({ order }) => {
  console.log(order)

  return (
    <div>
      <h1>Order</h1>
      <p>{order.user_email}</p>
      <p>{order.total}</p>
      <p>{order.products.length}</p>
    </div>
  )
}
export default Order
