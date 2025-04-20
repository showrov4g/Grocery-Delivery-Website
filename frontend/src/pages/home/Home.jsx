import React from 'react'
import MainBanner from '../../components/mainBanner/MainBanner'
import Category from '../../components/category/Category'
import BestSeller from '../../components/bestSeller/BestSeller'
import BottomBanner from '../../components/bottomBanner/BottomBanner'
import NewsLetter from '../../components/newsLetter/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Category/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLetter/>
    </div>
  )
}

export default Home
