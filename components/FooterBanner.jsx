import Link from 'next/link'

import { urlFor } from '@/lib/client'
import { WhiteBtn } from './buttons'

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
          <h3 className='ml-2 font-black text-7xl leading-snug '>
            <div>{largeText1}</div>
            <div>{largeText2}</div>
          </h3>
          <p>{saleTime}</p>
        </div>
        <div className='w-fit max-w-md min-w-min'>
          <img
            src={urlFor(image)}
            alt='footer image showing one product'
            className='footer-banner-image '
          />
        </div>

        <div className='pt-12 pb-8 max-w-sm'>
          <p>{smallText}</p>
          <h3 className='font-extrabold text-6xl leading-snug'>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <WhiteBtn buttonText={buttonText} className='mt-6' />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FooterBanner
