import Link from 'next/link'

import { urlFor } from '@/lib/client'
import { RedBtn } from './buttons'

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className='bg-milk rounded-3xl px-6 text-lg flex flex-col md:flex-row md:items-center'>
        <div className='md:py-20 pt-20 md:self-start'>
          <p className='beats-solo'>{heroBanner.smallText}</p>
          <h3 className='text-6xl font-normal md:text-7xl'>
            {heroBanner.midText}
          </h3>
          <h1>{heroBanner.largeText}</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <RedBtn className='mt-8 leading-5'>{heroBanner.buttonText}</RedBtn>
          </Link>
        </div>
        <div>
          <img src={urlFor(heroBanner.image)} alt='headphones' />
        </div>
        <div className='z-50 pb-10 self-end text-txt'>
          <h5>Përshkrimi</h5>
          <p className='text-gray-500'>{heroBanner.desc}</p>
        </div>
      </div>
    </>
  )
}
export default HeroBanner
