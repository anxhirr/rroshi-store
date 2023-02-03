import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const QuantityBox = ({ quantity, handleMinus, handlePlus }) => {
  return (
    <div className='border border-gray-500 flex items-center max-w-min '>
      <span className='cursor-pointer p-4' onClick={handleMinus}>
        <AiOutlineMinus className='text-red-600' />
      </span>
      <span className='px-2 border-x border-gray-500 font-bold text-lg font-monospace w-10 text-center'>
        {quantity}
      </span>
      <span className='cursor-pointer p-4' onClick={handlePlus}>
        <AiOutlinePlus className='text-green-600' />
      </span>
    </div>
  )
}
export default QuantityBox
