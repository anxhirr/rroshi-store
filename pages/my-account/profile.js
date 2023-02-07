import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { db, initFirebase } from '@/firebase/firebaseApp'
import { getAuth } from 'firebase/auth'
import { collection, doc, getDocs } from 'firebase/firestore'
import { authActions } from '@/redux-store/auth-slice'
import { RedBtn } from '@/components/buttons'
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie'

const Profile = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const { userUID } = useSelector((state) => state.auth)
  initFirebase()
  const auth = getAuth()

  useEffect(() => {
    const ordersCollectionRef = collection(db, 'users', userUID, 'orders')
    const getOrders = async () => {
      const orderCollection = await getDocs(ordersCollectionRef)

      setOrders(
        orderCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    }

    getOrders()
  }, [])

  const handleLogOut = () => {
    auth.signOut()
    router.push('/my-account')

    Cookies.remove('userUID')
    dispatch(authActions.setUserUID(null))
    toast.success('You have been logged out')
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-6xl'>Profile Page</h1>

      <h2 className='text-2xl'>Welcome </h2>

      <h3 className='text-2xl'>Your Orders</h3>

      <div className='flex flex-col md:flex-row gap-6 items-center'>
        {orders.map((order) => (
          <div key={order.id}>
            <h4 className='text-2xl'>Order Item: {order.item}</h4>
            <p className='text-xl'>Order Date: {order.date}</p>
            <p className='text-xl'>Order Total: {order.total}</p>
            <p className='text-xl'>Order Status: {order.status}</p>

            <p className='text-xl'>Phone: {order.phone}</p>
            <p className='text-xl'>Address: {order.address}</p>
            <p className='text-xl'>City: {order.city}</p>
            <p className='text-xl'>Zip: {order.zip}</p>
          </div>
        ))}
      </div>

      <RedBtn onClick={handleLogOut}>Log out</RedBtn>
    </div>
  )
}

export default Profile
