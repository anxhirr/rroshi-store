import Link from 'next/link'

import { urlFor } from '@/lib/client'

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
      <div className='banner-desc flex justify-between px-8'>
        <div className='left pt-12 pb-8'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='w-fit max-w-md min-w-min'>
          <img
            src={urlFor(image)}
            alt='footer image showing one product'
            className='footer-banner-image '
          />
        </div>

        <div className='right pt-12 pb-8 max-w-sm'>
          <p>{smallText}</p>
          <h3 className='font-extrabold text-6xl'>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type='button' className='button white mt-5'>
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FooterBanner
