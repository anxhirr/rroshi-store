import Link from 'next/link'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Rrroshi Store All rights reserved</p>
      <p className='icons flex gap-4 text-3xl'>
        <Link href='' className='hover:opacity-90 cursor-pointer'>
          <AiFillInstagram />
        </Link>
        <Link
          href='https://www.facebook.com/profile.php?id=100011414311113'
          target='_blank'
          className='hover:opacity-90 cursor-pointer'
        >
          <RiFacebookCircleFill />
        </Link>
        <Link href='' className='hover:opacity-90 cursor-pointer'>
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}
export default Footer
