import { showDialog, showMessenger } from 'react-messenger-chat-plugin'

const index = () => {
  return (
    <button
      onClick={() => {
        showDialog()
        showMessenger()
      }}
      className='button red'
    >
      show messenger ?
    </button>
  )
}
export default index
