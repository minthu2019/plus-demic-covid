import React from "react";
import Card from "./Card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { SlideLeft } from "@/utility/animation";

const HowHelp = () => {
  return (
    <section  name="custome">
      <div className=" container py-8">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card div */}
          <div className="col-span-2">
            <div className=" grid grid-cols-2 md:grid-cols-4  gap-4">
              <Card />
            </div>
          </div>
          {/* Text div */}
          <div className=" flex items-center justify-center flex-col p-6">
            <motion.div
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
            >
              <h1 className=" text-3xl font-bold text-accent">
                How it Helps people
              </h1>
              <p className=" text-lg font-normal text-gray-400 mt-4">
                Here are some ways that our platform helps people id pariatur
                soluta quisquam.
              </p>
              <p className=" text-sm  text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque id pariatur soluta quisquam
                <a href="#" className=" text-primary">
                  Learm More ...
                </a>
              </p>
              <Button className=" mt-4">Get in Touch</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHelp;
