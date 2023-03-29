'use client'

import Product from './Product'

const MayLikeProducts = ({ products }) => {
  return (
    <div className='mt-20'>
      <h2 className='text-center text-3xl text-txt font-bold'>
        Produkte të ngjashme
      </h2>
      <div className='marquee'>
        <div className='track flex items-center gap-7 my-10'>
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default MayLikeProducts
