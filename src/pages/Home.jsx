import React from 'react'
import Banner from '../components/Banner'
import CategoryCard from '../components/CategoryCard'
import MainCard from '../components/MainCard'
import FeelLikeHome from '../components/FeelLikeHome'
import ProductCategory from '../components/ProductCategory'
import Productbanner from '../components/Productbanner'
import WantInspiration from '../components/WantInspiration'
import ProductContainer from '../components/product/productContainer'
import ShopNew from '../components/product/ShopNew'
import SaveShop from '../components/saveshop/SaveShop'

function Home() {
  return (
    <main className='w-[90%] mx-auto'>
        <div className='mt-6 mb-6'>
            <Banner img={'https://m.media-amazon.com/images/G/01/Zappos/ShipCutoff24/HP-SHIPPING-CUTOFF-BANNER-STANDARD-1440x65._FMwebp_.png'}/>
            <CategoryCard/>
            <MainCard/>
            <FeelLikeHome/>
            <Banner img={'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/HP-SNEAK-UP-SALE-BANNER-STANDARD-1440x100._FMwebp_.png'}/>
            <ProductCategory/>
            <Productbanner/>
            <WantInspiration/>
            <ProductContainer/>
            <ShopNew/>
            <SaveShop/>
        </div>
    </main>
  )
}

export default Home
