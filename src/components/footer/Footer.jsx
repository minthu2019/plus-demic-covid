import React from "react";
import logo from "../../assets/logo.png";
import { Facebook, Github, Instagram, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition:{duration:0.5, delay:0.4, ease: "easeIn"}}} className="container py-12">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* logo and text div */}
          <div className=" flex flex-col justify-center px-24">
            <img src={logo} alt="" className="w-24" />
            <p className=" text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ad eos eaque nulla nisi possimus repellendus similique
              earum obcaecati error.
            </p>
          </div>

          {/* social icons div */}
          <div className=" flex items-center justify-center gap-4 p-4">
            <div className=" bg-secondary hover:bg-primary p-4 rounded-full">
              <Github className="text-3xl text-black  " />
            </div>
            <div className=" bg-secondary hover:bg-primary p-4 rounded-full">
              <Facebook className="text-3xl text-black  " />
            </div>
            <div className=" bg-secondary hover:bg-primary p-4 rounded-full">
              <Instagram className="text-3xl text-black  " />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
