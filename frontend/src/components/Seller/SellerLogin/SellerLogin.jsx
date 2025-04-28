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
        <div>
            <p><span>Seller</span>Login</p>
        </div>
    </form>
  )
}

export default SellerLogin
