import ProductDetails from '../../../../components/ProductDetails'
import MayLikeProducts from '../../../../components/MayLikeProducts'
import { fetchProduct, fetchProducts } from '../../../../lib/fetchFromSanity'

export const dynamic = 'force-static'

const SelectedProduct = async (props) => {
  const { slug } = props.params

  const product = await fetchProduct(slug)
  const products = await fetchProducts()

  return (
    <div>
      <ProductDetails product={product} />
      <MayLikeProducts products={products} />
    </div>
  )
}

export default SelectedProduct
