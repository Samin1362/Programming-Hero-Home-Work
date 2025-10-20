import React from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // ⭐️ icons

const News = ({ news }) => {
  const { title, author, image_url, details, rating } = news;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-2 border-gray-300 mb-[30px] p-4">
      {/* heading */}
      <div className="flex items-center justify-between bg-base-300 px-2">
        <div className="flex items-center gap-3">
          <div className="max-w-[40px]">
            <img className="rounded-full w-full" src={author.img} alt="" />
          </div>
          <div>
            <div>{author.name}</div>
            <div>{author.published_date}</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <h1 className="font-bold text-xl my-[14px]">{title}</h1>
      <img className="w-full" src={image_url} alt="image not available" />
      
      {/* Details */}
      <div className="px-3 my-[24px]">
        <p
          className={`text-gray-700 transition-all duration-300 ${
            expanded ? "line-clamp-none" : "line-clamp-5"
          }`}
        >
          {details}
        </p>

        {/* Read More / Read Less */}
        {details.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 font-medium mt-2 hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Rating Section */}
      <div className="flex items-center justify-between bg-base-300 px-3 py-3 border-t border-gray-300">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rating.number) ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
          {rating.badge}
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default News;
