import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar z-50 bg-transparent transition-all duration-300">
      <div className="px-4 sm:px-20 mx-auto flex justify-between items-center w-full">
        {/* Logo aligned to the left */}
        <div className="flex justify-start">
          <img
            src="https://servalabs.b-cdn.net/logo/full.png"
            alt="ServaLabs"
            className="w-[180px] h-[48px] sm:w-[224px] sm:h-[64px]"
          />
        </div>

        {/* Desktop Navigation aligned to the right */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-500 cursor-pointer text-[18px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon aligned to the right */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-thetrans  absolute top-16 right-4 min-w-[160px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col items-start space-y-4">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
