import { FooterBanner, HeroBanner, Product } from '../../components'
import ProductsList from '../../components/products/ProductsList'
import { fetchBanner, fetchProducts } from '../../lib/fetchFromSanity'

const HomePage = async () => {
  const bannerData = await fetchBanner()

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/*  @ts-expect-error Server Component */}
      <ProductsList />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}
export default HomePage
