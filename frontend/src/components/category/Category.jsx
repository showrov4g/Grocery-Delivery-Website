import React from 'react'
import { assets, categories } from '../../assets/assets'

const Category = () => {
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Categories</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6: xl:grid-cols-7 mt-6 gap-6'>

                {/* category data maping */}
                {
                    categories.map((category, index)=>{
                        
                    })
                }

                <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                    <img src={assets.box_icon} alt="category_image" className='group-hover:scale-108 transition max-w-28' />
                    <p className='text-sm font-medium'>Fruit</p>
                </div>
            </div>
        </div>
    )
}

export default Category
