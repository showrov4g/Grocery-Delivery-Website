import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    return (
        <div className='relative'>
            <img src={assets.main_banner_bg} alt="banner background" className='w-full hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="banner background" className='w-full md:hidden' />
            {/* add text  */}
            <div>
                <h1 className=''>Freshness You Can Trust, Savings You will Love!</h1>
            </div>
            {/* buttons  */}
            <div className='flex items-center mt-6 font-medium'>
                <Link to="/products" className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>Shop Now <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="" /></Link>
                {/* second link  */}
                <Link className='group flex items-center gap-2 px-7 md:px-9 py-3 cursor-pointer'>Explore deals <img className='transition group-focus:translate-x-1' src={assets.black_arrow_icon} alt="" /></Link>
            </div>
        </div>
    )
}

export default MainBanner;
