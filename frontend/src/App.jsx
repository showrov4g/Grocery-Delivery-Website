import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainBanner from './components/mainBanner/MainBanner'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login/Login'
import AllProduct from './pages/AllProduct/AllProduct'
import ProductCategory from './pages/productCategory/ProductCategory'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import AddAddress from './pages/AddAddress/AddAddress'
import MyOrder from './pages/myOrders/MyOrder'
import SellerLogin from './components/Seller/SellerLogin/SellerLogin'
import SellerLayOut from './pages/seller/sellerLayOut/SellerLayOut'
import AddProduct from './pages/seller/AddProduct/AddProduct'
import ProductList from './pages/seller/ProductList/ProductList'
import Orders from './pages/seller/Orders/Orders'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      <Toaster />
      {isSellerPath ? "" : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <div className={`${isSellerPath ? "" : " px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-orders' element={<MyOrder />} />
          <Route path='/seller' element={isSeller ? <SellerLayOut /> : <SellerLogin />}>
              <Route index element={isSeller ? <AddProduct/> :null} />
              <Route path='product-list' element={<ProductList/>} />
              <Route path='orders' element={<Orders/>} />
              
          </Route>

        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App
