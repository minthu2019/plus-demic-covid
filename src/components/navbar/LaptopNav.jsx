import React from "react";
import { Link } from "react-scroll";

const laptopNavs = [
  {
    id: 1,
    name: "Home",
    url: "home",
    offset: -120,
  },
  {
    id: 2,
    name: "Custome Stories",
    url: "custome",
    offset:-60,
  },
  {
    id: 3,
    name: "About",
    url: "about",
    offset: -40,
  },
  {
    id: 4,
    name: "Blog",
    url: "blog",
    offset: -30,
  },
];

const LaptopNav = () => {
  return (
    <>
      <ul className="hidden md:flex items-center gap-5 ">
        {laptopNavs.map((laptopNav) => {
          return (
            <li className=" hover:text-primary cursor-pointer" key={laptopNav.id}>
              <Link to={laptopNav.url} smooth={true} activeClass="active" offset={laptopNav.offset}>{laptopNav.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LaptopNav;
