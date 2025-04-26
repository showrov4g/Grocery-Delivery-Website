import React from 'react'
import { assets } from '../../assets/assets'

// input field 
const inputField = (()=>(
    <input type="text" />
))

const AddAddress = () => {
  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>Add shipping <span className='font-semibold text-primary '>Address</span></p>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div></div>
        <img src={assets} alt="" />

      </div>
    </div>
  )
}

export default AddAddress
