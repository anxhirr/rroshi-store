import Link from 'next/link'

import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button' className='button red relative mt-20'>
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className='desc'>
            <h5>Përshkrimi</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroBanner
