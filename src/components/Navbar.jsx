import { useState, useEffect } from "react";
import { close, menu, full_logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to change navbar style
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 50); // Change 50 to your desired scroll threshold
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full flex py-4 justify-between items-center navbar fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-sexy' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center w-full px-4">
        <img src={full_logo} alt="hoobank" className="w-[224px] h-[64px]" />

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold cursor-pointer text-[21px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
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
