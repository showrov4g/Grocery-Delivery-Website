import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainBanner from './components/mainBanner/MainBanner'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
