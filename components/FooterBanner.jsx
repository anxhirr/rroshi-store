import Link from 'next/link'

import { urlFor } from '../lib/sanity.client'
import { WhiteBtn } from './buttons'
import Image from 'next/image'

const FooterBanner = ({ footerBanner }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  } = footerBanner

  return (
    <div className='footer-banner-container mt-32'>
      <div className='flex flex-col md:flex-row justify-between px-8'>
        <div className='pt-12 pb-8'>
          <p>{discount}</p>
          <h3 className='sm:flex gap-7 md:block ml-2 font-black text-7xl leading-snug '>
            <div>{largeText1}</div>
            <div>{largeText2}</div>
          </h3>
          <p>{saleTime}</p>
        </div>
        <div className='w-fit max-w-md min-w-min'>
          <Image
            src={urlFor(image).url()}
            alt='footer image showing one product'
            width={250}
            height={250}
            className='footer-banner-image '
            priority
          />
        </div>

        <div className='pb-8 self-end sm:-mt-32 md:mt-0 md:self-center md:pt-0'>
          <p>{smallText}</p>
          <h3 className='font-extrabold text-6xl leading-snug md:pb-4'>
            {midText}
          </h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <WhiteBtn className='mt-6'>{buttonText}</WhiteBtn>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FooterBanner
