import React from 'react'
import { assets } from '../../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner background" className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="banner background" className='w-full md:hidden' />
    </div>
  )
}

export default MainBanner
