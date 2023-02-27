'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../../lib/redux-store/store'

const Providers = ({ children, session }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <SessionProvider session={session}>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  )
}
export default Providers
