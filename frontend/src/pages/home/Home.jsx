import React from 'react'
import MainBanner from '../../components/mainBanner/MainBanner'
import Category from '../../components/category/Category'
import BestSeller from '../../components/bestSeller/BestSeller'
import BottomBanner from '../../components/bottomBanner/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Category/>
      <BestSeller/>
      <BottomBanner/>
    </div>
  )
}

export default Home
