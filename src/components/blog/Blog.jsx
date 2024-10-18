import React from "react";
import Icons1 from "../../assets/icon1.png";
import Icons2 from "../../assets/icon2.png";
import { motion } from "framer-motion";
import { SlideUp } from "@/utility/animation";

const Blog = () => {
  return (
    <section name="blog">
      <div className="container bg-secondary py-10">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className=" text-3xl font-bold text-black  py-6 text-center"
        >
          Why you can trust this tool
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* text 1*/}
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className=" space-y-6 text-center md:text-left md:px-20 mt-6"
          >
            <div className=" flex items-center justify-center  ">
              <img src={Icons1} alt="" className="" />
            </div>
            <p className=" text-xl  font-bold">Based on reliable source </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, temporibus sapiente corrupti molestiae non iure iste
              illum? Unde, sed perspiciatis.
            </p>
            <p className=" text-gray-400 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              ducimus dolorem alias quas nisi nihil rem. Velit, dolores{" "}
              <a href="#hello" className=" text-primary text-sm">
                {" "}
                Learm More ...
              </a>
            </p>
          </motion.div>

          {/* text 2 */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className=" space-y-6 text-center md:text-left md:px-20 mt-2"
          >
            <div className=" flex items-center justify-center">
              <img src={Icons2} alt="" className="" />
            </div>
            <p className="text-xl  font-bold">Based on reliable source </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, temporibus sapiente corrupti molestiae non iure iste
              illum? Unde, sed perspiciatis.
            </p>
            <p className=" text-gray-400 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              ducimus dolorem alias quas nisi nihil rem. Velit, dolores{" "}
              <a href="#hello" className=" text-primary text-sm">
                {" "}
                Learm More ...
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
