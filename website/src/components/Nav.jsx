import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
        <img src="./icons/logo.png" alt="logo" width="80px" height="60px"/>

        </div>
        <div className="space-x-8">
          <NavLink 
            to="/home" 
            className="text-gray-300 hover:text-white" 
            activeClassName="text-white font-semibold"
          >
            Home
          </NavLink>
          <NavLink 
            to="/events" 
            className="text-gray-300 hover:text-white" 
            activeClassName="text-white font-semibold"
          >
            Events
          </NavLink>
          <NavLink 
            to="/members" 
            className="text-gray-300 hover:text-white" 
            activeClassName="text-white font-semibold"
          >
            Members
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-gray-300 hover:text-white" 
            activeClassName="text-white font-semibold"
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
