import React from "react";
import Icon1 from "../../assets/icon/1 .png";
import Icon2 from "../../assets/icon/2 .png";
import Icon3 from "../../assets/icon/3 .png";
import Icon4 from "../../assets/icon/4 .png";
import { motion } from "framer-motion";
import { SlideRight } from "@/utility/animation";

const cards = [
  {
    id: 1,
    image: Icon1,
    heading: " Symptons",
    desc: "Lorem  Sunt incidunt eveniet molestiae rem nobis. Ad ipsa asperiores porro quidem exercitationem!",
    delay: 0.2,
  },
  {
    id: 2,
    image: Icon2,
    heading: " Recommendations",
    desc: "Lorem  Sunt incidunt eveniet molestiae rem nobis. Ad ipsa asperiores porro quidem exercitationem!",
    delay: 0.4,
  },
  {
    id: 3,
    image: Icon3,
    heading: " Local information",
    desc: "Lorem  Sunt incidunt eveniet molestiae rem nobis. Ad ipsa asperiores porro quidem exercitationem!",
    delay: 0.6,
  },
  {
    id: 4,
    image: Icon4,
    heading: "Care or Taking",
    desc: "Lorem  Sunt incidunt eveniet molestiae rem nobis. Ad ipsa asperiores porro quidem exercitationem!",
    delay: 0.8,
  },
];

const Card = () => {
  return (
    <>
      {cards.map((card) => {
        return (
          <motion.div
            variants={SlideRight(card.delay)}
            initial="initial"
            whileInView="animate"
            className=" p-4 bg-white rounded-lg border-[1px] border-gray-300 text-center shadow-lg"
          >
            <div>
              <img
                src={card.image}
                className=" bg-secondary rounded-full p-4 w-24 mx-auto"
                alt={card.heading}
              />
            </div>
            <h4 className=" text-[12px] md:text-lg font-bold mt-6 mb-3 capitalize">
              {card.heading}
            </h4>
            <p className=" text-gray-400 text-[10px] md:text-sm">{card.desc}</p>
          </motion.div>
        );
      })}
    </>
  );
};

export default Card;
