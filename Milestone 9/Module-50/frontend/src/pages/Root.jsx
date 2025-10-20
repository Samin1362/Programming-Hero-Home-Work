import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSide from "../layouts/leftSide";

const Root = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-12 mt-4">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <aside></aside>
      </main>
    </div>
  );
};

export default Root;
