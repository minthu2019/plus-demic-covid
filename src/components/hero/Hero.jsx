import React from "react";
import HeroImge from "../../assets/hero.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { SlideUp, SlideLeft } from "@/utility/animation";

const Hero = () => {
  return (
    <section name="home">
      <div className=" container bg-secondary rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px] md:my-5">
        {/* text section */}
        <div className="flex flex-col  justify-center gap-4 ">
          <div className=" space-y-6 mt-10 mb-10 md:mb-0 md:mt-0 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-2xl md:text-6xl font-bold text-accent"
            >
              Covid-19 Risk <br /> Assessment Tool
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-sm md:text-lg text-gray-400 mt-4"
            >
              Assess your risk of getting infected with Covid-19 Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Repudiandae,
              dignissimos itaque infected with Covid-19.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
            >
              <Button variant="secondary">See how to use it</Button>
            </motion.div>
          </div>
        </div>

        {/* image section */}
        <motion.div
          variants={SlideLeft(0.8)}
          initial="initial"
          whileInView="animate"
          className=" flex items-center justify-center"
        >
          <img src={HeroImge} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
