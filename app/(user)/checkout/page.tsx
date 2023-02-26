import CheckoutDetails from '../../../components/checkout/CheckoutDetails'
import OrderDetails from '../../../components/checkout/OrderDetails'

const CheckoutPage = () => {
  const sendOrder = () => {
    console.log('Order sent')
  }
  return (
    <div>
      <h1 className='text-4xl font-bold mb-8 pt-12'>Checkout</h1>

      <div className='flex flex-col md:flex-row gap-12'>
        <CheckoutDetails />
        <OrderDetails />
      </div>
    </div>
  )
}
export default CheckoutPage
