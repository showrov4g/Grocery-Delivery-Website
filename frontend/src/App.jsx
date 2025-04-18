import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainBanner from './components/mainBanner/MainBanner'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/home/Home'
import  { Toaster } from 'react-hot-toast';

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")

  return (
    <div>
      <Toaster />
      {isSellerPath? "": <Navbar />}
      <div className={`${isSellerPath ? "" : " px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
