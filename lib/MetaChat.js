import { MessengerChat } from 'react-messenger-chat-plugin'

const MetaChat = () => {
  return (
    <MessengerChat
      pageId='427120347728357'
      language='sv_SE'
      themeColor={'#000000'}
      bottomSpacing={300}
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
  )
}
export default MetaChat
