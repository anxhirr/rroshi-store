'use client'

import Product from './Product'

const MayLikeProducts = ({ products }) => {
  return (
    <div className='maylike-products-wrapper'>
      <h2>Produkte të ngjashme</h2>
      <div className='marquee'>
        <div className='maylike-products-container track'>
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default MayLikeProducts
