import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Navbar = () => {
  const [ scroll, setScroll ] = useState(false);

  const handleScrolled = () => {
    if( window.scrollY > 0 ){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

 useEffect(()=>{
  window.addEventListener('scroll', handleScrolled)
  return()=>{
    window.removeEventListener('scroll', handleScrolled)
  }
 },[])


  return (
    <div className={`${ scroll && "bg-white/85   "} container sticky inset-0  h-[58px] py-3 flex items-center justify-between`}>
      {/* logo section */}
      <div>
        <img src={logo} alt="logo" className="w-36" />
      </div>

      {/* Navlinks section */}
      <div>
        <LaptopNav />
      </div>

      {/* Button section */}
      <div className=" block md:hidden">
        <MobileNav />
      </div>

      <Button className="hidden md:block">Get in Touch</Button>
    </div>
  );
};

export default Navbar;
