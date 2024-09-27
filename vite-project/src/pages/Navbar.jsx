import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Link to ="/" className=' text-lg font-bold' > Movies Search </Link>
    </div>
  )
}

export default Navbar
