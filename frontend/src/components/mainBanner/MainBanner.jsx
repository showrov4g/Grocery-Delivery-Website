import React from 'react'
import { assets } from '../../assets/assets'

const MainBanner = () => {
  return (
    <div>
      <img src={assets.main_banner_bg} alt="banner background" className='w-full hidden md:block' />
    </div>
  )
}

export default MainBanner
