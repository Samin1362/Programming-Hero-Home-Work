import React from 'react';
import user from "../assets/user.png"
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='mt-[20px] flex items-center justify-between'>
      <div></div>
      <div className='flex gap-4 text-base-200'>
        <NavLink to="/"><h1>Home</h1></NavLink>
        <NavLink to="/about"><h1>About</h1></NavLink>
        <NavLink to="/career"><h1>Career</h1></NavLink>
      </div>
      <div className='flex gap-2'>
        <img src={user} alt="" />
        <button className='btn btn-secondary px-[40px]'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;