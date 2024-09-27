import React from 'react'
import { ApiKey } from './constants'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1 className='text-center text-lg font-bold'>yo lets build react router project</h1>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
