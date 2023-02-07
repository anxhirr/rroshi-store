import '@/styles/global.css'

import { Provider } from 'react-redux'
import { store, persistor } from '../redux-store/index.js'

import { Layout } from '@/components'
import { Toaster } from 'react-hot-toast'
import { MessengerChat } from 'react-messenger-chat-plugin'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Toaster />
          <MessengerChat pageId='427120347728357' />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}
