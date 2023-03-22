import Link from 'next/link'

import { urlFor } from '../lib/sanity.client'
import Image from 'next/image'

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className='bg-milk rounded-3xl px-6 text-lg flex flex-col md:flex-row md:justify-between'>
        <div className='md:py-20 md:pl-6 pt-6 md:self-start'>
          <p className='beats-solo'>{heroBanner.smallText}</p>
          <h3 className='text-6xl font-normal md:text-7xl'>
            {heroBanner.midText}
          </h3>
          <h1>{heroBanner.largeText}</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='mt-8 leading-5 red-btn'>
              {heroBanner.buttonText}
            </button>
          </Link>
        </div>
        <div>
          <Image
            src={urlFor(heroBanner.image).url()}
            alt='hero-banner'
            width={250}
            height={250}
            priority
          />
        </div>
        <div className='pb-10 self-end text-txt'>
          <h5>Përshkrimi</h5>
          <p className='text-gray-500'>{heroBanner.desc}</p>
        </div>
      </div>
    </>
  )
}
export default HeroBanner
