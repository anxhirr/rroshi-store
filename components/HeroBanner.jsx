import Link from 'next/link'

import { urlFor } from '@/lib/client'
import { RedBtn } from './buttons'

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
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
              <RedBtn
                buttonText={heroBanner.buttonText}
                className='mt-12 leading-5'
              />
            </Link>
            <div className='desc'>
              <h5>Përshkrimi</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroBanner
