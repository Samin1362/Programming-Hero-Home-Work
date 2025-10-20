import React, { use } from "react";
import { NavLink } from "react-router";

const categories = fetch("../../public/categories.json").then((res) =>
  res.json()
);

const LeftSide = () => {
  const allCategoies = use(categories);


  return (
    <div>
      <h1 className="font-semibold text-xl mb-[20px]">All Caterogy</h1>
      {allCategoies.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          className="flex flex-col mt-2 py-2 px-2 hover:bg-base-300"
        >
          <h2>{category.name}</h2>
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSide;
