import React from 'react'
import ProductCart from '../productCart/ProductCart'
import { useAppContext } from '../../context/AppContext'

const BestSeller = () => {
    const {products} = useAppContext()
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers </p>
      {/* product list */}
      <div>
        <ProductCart product={products[0]}/>
      </div>
    </div>
  )
}

export default BestSeller
