import React, { use } from "react";
import { useParams } from "react-router-dom";
import News from "./News";

const allNews = fetch("../../public/news.json").then((res) => res.json());

const CategoryDetails = () => {
  const { id } = useParams();
  const convertedId = Number(id);

  const data = use(allNews);

  const filteredData = data.filter((news) => news.category_id === convertedId);

  return (
    <div>
      <h1 className="font-semibold text-xl mb-[30px]">Dragon News Home</h1>
      {
        filteredData.map((news, index) => <News key={index} news={news}></News>)
      }
    </div>
  );
};

export default CategoryDetails;
