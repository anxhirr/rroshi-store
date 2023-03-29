import { fetchProducts } from '../../lib/fetchFromSanity'
import { ProductDataType } from '../../typings'
import Product from './Product'

const ProductsList = async () => {
  const products: ProductDataType[] = await fetchProducts()

  return (
    <>
      <div className='my-9 text-center text-txt'>
        <h2 className='text-4xl font-extrabold'>
          Produktet më të mira ne treg
        </h2>
        <p className='font-medium text-lg'>Speakers nga llojet më të veçantë</p>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-7'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}
export default ProductsList
