import ProductDetails from '../../../../components/products/ProductDetails'
import MayLikeProducts from '../../../../components/products/MayLikeProducts'
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
