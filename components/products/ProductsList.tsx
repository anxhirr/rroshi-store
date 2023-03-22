import { fetchProducts } from '../../lib/fetchFromSanity'
import { ProductDataType } from '../../typings'
import Product from './Product'

const ProductsList = async () => {
  const products: ProductDataType[] = await fetchProducts()

  return (
    <>
      <div className='products-heading'>
        <h2>Produktet më të mira ne treg</h2>
        <p className='font-medium text-lg'>Speakers nga llojet më të veçantë</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}
export default ProductsList
