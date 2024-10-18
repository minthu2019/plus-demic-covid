import React from "react";
import uses1 from "../../assets/uses/1.png";
import uses2 from "../../assets/uses/2.png";
import uses3 from "../../assets/uses/3.png";
import {  motion } from "framer-motion";
import { SlideLeft } from "@/utility/animation";

const cards = [
  {
    id: 1,
    title: "Coronavirus",
    image: uses1,
    delay: 0.,
  },
  {
    id: 2,
    title: "Diagonostic",
    image: uses2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Symptoms",
    image: uses3,
    delay: 0.6,
  },
];

const Card = () => {
  return (
    <>
      {cards.map((card) => {
        return (
          <motion.div
            variants={SlideLeft(card.delay)}
            initial="initial"
            whileInView="animate"
            key={card.id}
          >
            <div>
              <img
                src={card.image}
                className="rounded-md overflow-hidden shadow-xl "
                alt={card.title}
              />
            </div>
            <h3 className="mt-2 text-gray-400">{card.title}</h3>
          </motion.div>
        );
      })}
    </>
  );
};

export default Card;
