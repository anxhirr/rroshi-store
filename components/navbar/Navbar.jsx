import Link from 'next/link'
import ChartButton from './ChartButton'
import { RiAccountCircleLine } from 'react-icons/ri'
import Image from 'next/image'
import { urlFor } from '../../lib/sanity.client'
import { fetchLogo } from '../../lib/fetchFromSanity'

const Navbar = async () => {
  const logo = await fetchLogo()

  return (
    <div className='flex justify-between relative mb-4 text-gray-600'>
      <Link href='/' className='cursor-pointer'>
        <Image
          src={urlFor(logo[0].image).url()}
          alt='logo'
          width={200}
          height={20}
        />
      </Link>
      <div className='flex gap-6 items-center'>
        <Link
          href='/account'
          className='text-2xl cursor-pointer duration-150  hover:scale-110'
        >
          <RiAccountCircleLine />
        </Link>
        <ChartButton />
      </div>
    </div>
  )
}
export default Navbar
