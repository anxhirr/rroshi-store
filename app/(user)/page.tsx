import { FooterBanner, HeroBanner, Product } from '../../components'
import { fetchBanner, fetchProducts } from '../../lib/fetchFromSanity'

const HomePage = async () => {
  const products = await fetchProducts()
  const bannerData = await fetchBanner()

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Produktet më të mira ne treg</h2>
        <p className='font-medium text-lg'>Speakers nga llojet më të veçantë</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}
export default HomePage
