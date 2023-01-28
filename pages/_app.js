import '@/styles/global.css'

import { Provider } from 'react-redux'
import store from '../redux-store/index.js'

import { Layout } from '@/components'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
