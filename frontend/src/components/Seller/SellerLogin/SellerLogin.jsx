import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/AppContext'

const SellerLogin = () => {
    const {isSeller, setIsSeller, navigate, } = useAppContext();
    const [email ,setEmail] = useState('');
    const [passwrod, setPassword] = useState('');


    useEffect(()=>{
        if(isSeller){
            navigate('/seller')
        }
    },[isSeller])

    // from submit function 
    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        setIsSeller(true);
    }

  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
        <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-b-gray-200 '>
            <p className='text-2xl font-medium mx-auto'><span className='text-primary'>Seller</span>Login</p>
        </div>
    </form>
  )
}

export default SellerLogin
