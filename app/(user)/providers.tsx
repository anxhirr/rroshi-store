'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { MessengerChat } from 'react-messenger-chat-plugin'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../../lib/redux-store/store'

const Providers = ({ children, session }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <MessengerChat
          pageId='427120347728357'
          language='sv_SE'
          themeColor={'#000000'}
          bottomSpacing={0}
          loggedInGreeting='loggedInGreeting'
          loggedOutGreeting='loggedOutGreeting'
          greetingDialogDisplay={'show'}
          debugMode={true}
          onMessengerShow={() => {
            console.log('onMessengerShow')
          }}
          onMessengerHide={() => {
            console.log('onMessengerHide')
          }}
          onMessengerDialogShow={() => {
            console.log('onMessengerDialogShow')
          }}
          onMessengerDialogHide={() => {
            console.log('onMessengerDialogHide')
          }}
          onMessengerMounted={() => {
            console.log('onMessengerMounted')
          }}
          onMessengerLoad={() => {
            console.log('onMessengerLoad')
          }}
        />
        <SessionProvider session={session}>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  )
}
export default Providers
