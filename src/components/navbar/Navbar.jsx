import React from 'react'
import logo from "../../assets/logo.png"
import LaptopNav from './LaptopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className=' container py-3 flex items-center justify-between'>
      {/* logo section */}
      <div>
        <img src={logo} alt="logo" className='w-36' />
      </div>

      {/* Navlinks section */}
      <LaptopNav/>

      {/* Button section */}
      <MobileNav/>
    </div>
  )
}

export default Navbar