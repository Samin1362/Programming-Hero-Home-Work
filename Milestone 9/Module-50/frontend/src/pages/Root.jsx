import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSide from "../layouts/leftSide";
import RightSide from "../layouts/RightSide";

const Root = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-12 mt-4 gap-4">
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftSide></LeftSide>
        </aside>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default Root;
