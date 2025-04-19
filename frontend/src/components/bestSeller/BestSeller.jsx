import React from 'react'
import ProductCart from '../productCart/ProductCart'

const BestSeller = () => {
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers </p>
      {/* product list */}
      <div>
        <ProductCart/>
      </div>
    </div>
  )
}

export default BestSeller
