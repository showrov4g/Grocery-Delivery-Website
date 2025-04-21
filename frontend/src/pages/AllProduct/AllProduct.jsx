import React, { useState } from 'react'
import { useActionState } from 'react'

const AllProduct = () => {
    const { products } = useActionState();
    // state variable
    const [filterProduct, SetFilterProduct] = useState();
    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default AllProduct
