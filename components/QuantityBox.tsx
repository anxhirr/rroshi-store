import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
  quantity: number
  handleMinus: () => void
  handlePlus: () => void
}

const QuantityBox = ({ quantity, handleMinus, handlePlus }: Props) => {
  return (
    <div className='flex items-center max-w-min '>
      <span className='cursor-pointer p-4 text-xl' onClick={handleMinus}>
        <AiOutlineMinus className='text-red-600' />
      </span>
      <span className='px-2 border-x border-gray-500 font-bold text-lg font-monospace w-10 text-center'>
        {quantity}
      </span>
      <span className='cursor-pointer p-4 text-xl' onClick={handlePlus}>
        <AiOutlinePlus className='text-green-600' />
      </span>
    </div>
  )
}
export default QuantityBox
