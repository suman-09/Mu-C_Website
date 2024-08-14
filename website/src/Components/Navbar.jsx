import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { Logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" backdrop-blur-md border-b-2 border-white/20 py-5 sticky top-0 z-50 shadow-lg">
      <div className=" mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 mx-3" />
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route, index) => (
            <div
              className=" hover:text-gray-300 text-xl cursor-pointer "
              key={index}
              onClick={() => {
                navigate(route.path);
              }}
            >
              {route.name}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
        {routes.map((route, index) => (
          <div
            className=" hover:text-gray-300 "
            onClick={() => {
              navigate(route.path);
            }}
          >
            {route.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
