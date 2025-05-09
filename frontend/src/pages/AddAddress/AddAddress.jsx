import React, { useState } from 'react';
import { assets } from '../../assets/assets';

// 🔹 Reusable Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-700 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address?.[name] || ''}
    required
  />
);

// 🔹 Main Add Address Component
const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Submitted Address:', address);
    // এখানে তুমি API call করতে পারো
  };

  return (
    <div className='mt-16 pb-16 px-4 md:px-10'>
      <p className='text-2xl md:text-3xl text-gray-600 mb-6'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
        <div className='flex-1 max-w-xl'>
          <form onSubmit={onSubmitHandler} className='space-y-4 text-sm'>

            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name" />
              <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name" />
            </div>

            <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Your Email" />
            <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street Address" />

            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City" />
              <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="zipcode" type="text" placeholder="Zip Code" />
              <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" />
            </div>

            <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="Phone Number" />

            <button
              type="submit"
              className='w-full mt-6 bg-primary text-white py-3 rounded hover:bg-primary/90 transition uppercase font-medium tracking-wide'
            >
              Save Address
            </button>
          </form>
        </div>

        <img
          className='md:w-1/2 md:mr-8 max-w-md'
          src={assets.add_address_iamge}
          alt="add address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
