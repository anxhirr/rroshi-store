import { FooterBanner, HeroBanner, Product } from '../../components'
import ProductsList from '../../components/products/ProductsList'
import { fetchBanner } from '../../lib/fetchFromSanity'
import { BannerDataType } from '../../typings'

const HomePage = async () => {
  const bannerData: BannerDataType[] = await fetchBanner()

  return (
    <>
      <HeroBanner heroBanner={bannerData ? bannerData[0] : []} />
      {/*  @ts-expect-error Server Component */}
      <ProductsList />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}
export default HomePage
