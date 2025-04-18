import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainBanner from './components/mainBanner/MainBanner'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
