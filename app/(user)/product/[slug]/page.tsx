import ProductDetails from '../../../../components/products/ProductDetails'
import MayLikeProducts from '../../../../components/products/MayLikeProducts'
import { fetchProduct, fetchProducts } from '../../../../lib/fetchFromSanity'
import { ProductDataType } from '../../../../typings'

export const dynamic = 'force-static'

const SelectedProduct = async (props) => {
  const { slug } = props.params

  const product: ProductDataType = await fetchProduct(slug)
  const products: ProductDataType[] = await fetchProducts()

  return (
    <div>
      <ProductDetails product={product} />
      <MayLikeProducts products={products} />
    </div>
  )
}

export default SelectedProduct
