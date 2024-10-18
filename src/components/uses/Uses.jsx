import React from "react";
import { Button } from "../ui/button";
import Card from "./Card";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
import {  SlideRight } from "@/utility/animation";

const Uses = () => {
  return (
    <section name="about">
      <div className=" container">
        <Separator />
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 mt-6">
          {/* text div */}
          <motion.div
            variants={SlideRight(0.2)}
            initial="initial"
            whileInView="animate"
            className=" flex items-center justify-center flex-col p-6"
          >
            <div>
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
            </div>
          </motion.div>
          {/* Card div */}
          <div className=" col-span-2">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
