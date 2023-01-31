import Link from 'next/link'
import {
  RiFacebookCircleFill,
  RiWhatsappFill,
  RiInstagramFill,
} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Rroshi Store All rights reserved</p>
      <p className='icons flex gap-4 text-3xl'>
        <Link
          href='https://www.instagram.com/rroshi_store/'
          target='_blank'
          className='hover:opacity-90 cursor-pointer'
        >
          <RiInstagramFill />
        </Link>
        <Link
          href='https://www.facebook.com/rroshistore'
          target='_blank'
          className='hover:opacity-90 cursor-pointer'
        >
          <RiFacebookCircleFill />
        </Link>
        <Link href='' className='hover:opacity-90 cursor-pointer'>
          <RiWhatsappFill />
        </Link>
      </p>
    </div>
  )
}
export default Footer
