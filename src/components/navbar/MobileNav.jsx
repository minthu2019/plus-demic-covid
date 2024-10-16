import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <div className=" flex gap-2 items-center justify-center">
      <div className=" block md:hidden">
        <Menu size={30} color="red"/>
      </div>
    <Button variant='default' className="hidden md:flex">Get in Touch</Button>
    
    </div>
  );
};

export default MobileNav;
