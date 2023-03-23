'use client'

import { toast } from 'react-hot-toast'

const DeleteOrderBtn = ({ id, setInStateOrders }) => {
  const handleClick = async () => {
    const res = await fetch('/api/orders/deleteOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 200) {
      console.log('Order deleted')
      setInStateOrders((prev) => prev.filter((order) => order._id !== id))
      toast.success('Order deleted')
    }

    if (res.status === 500) {
      console.log('Something went wrong')
    }
  }
  return (
    <button
      onClick={handleClick}
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
    >
      Fshi orderin
    </button>
  )
}
export default DeleteOrderBtn
