import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main>
        <aside></aside>
        <Outlet></Outlet>
        <aside></aside>
      </main>
    </div>
  );
};

export default Root;