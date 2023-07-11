import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/about">About Us</NavLink>
    </>
  )
}

export default Nav;