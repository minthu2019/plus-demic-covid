import React from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.png";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-scroll";

const mobileNavs = [
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
    offset: 0,
  },
  {
    id: 3,
    name: "About",
    url: "about",
    offset: -180,
  },
  {
    id: 4,
    name: "Blog",
    url: "blog",
    offset: -180,
  },
];

const MobileNav = () => {
  return (
    <div className=" flex gap-2 items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={30} color="red" />
        </SheetTrigger>
        <SheetContent className="h-screen flex items-center justify-center flex-col ">
          <div className="flex items-center justify-center pb-10">
            <img src={logo} alt="logo" className="w-36" />
          </div>
          <ul className=" flex items-center justify-center flex-col gap-10 ">
            {mobileNavs.map((mobileNav) => {
              return (
                <li
                  key={mobileNav.id}
                  className="hover:text-primary cursor-pointer"
                >
                  <SheetClose asChild>
                    <Link
                      to={mobileNav.url}
                      smooth={true}
                      offset={mobileNav.offset}
                    >
                      {mobileNav.name}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
