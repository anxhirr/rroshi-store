type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const GreenToBlueBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className='relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
      onClick={onClick}
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
        {children}
      </span>
    </button>
  )
}
export const PurpleToBlueBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <button className='relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
      <span
        className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
        onClick={onClick}
      >
        {children}
      </span>
    </button>
  )
}
export const TealToLimeBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <button className='relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
      <span
        className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
        onClick={onClick}
      >
        {children}
      </span>
    </button>
  )
}
export const DefaultBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export const AlternativeBtn = ({
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`py-2.5 px-5 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export const RedBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export const WhiteBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`focus:outline-none text-red-700 bg-white hover:bg-milk focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5  dark:bg-white dark:hover:bg-milk dark:focus:ring-emerald-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
