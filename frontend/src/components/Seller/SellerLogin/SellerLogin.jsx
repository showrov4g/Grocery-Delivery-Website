import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'

const SellerLogin = () => {
    const {isSeller, setIsSeller, navigate, } = useAppContext();
    const [email ,setEmail] = useState('');
    const [passwrod, setPassword] = useState('');
  return (
    <div>
      <h1>Seller login</h1>
    </div>
  )
}

export default SellerLogin
