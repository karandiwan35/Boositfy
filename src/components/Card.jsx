import React from "react";

const Card = ({content, heading, imgSrc}) => {
  return (
    <div className="md:w-1/4 sm:w-100 bg-gray-100 p-8 rounded hover:shadow-sm hover:bg-orange-100 hover:scale-105 cursor-pointer duration-1000">
      <img
        src={imgSrc}
        alt=""
        width={100}
      />
      <h2 className="text-left text-2xl font-strong mb-2">{heading}</h2>
      <p className="text-left">
       {content}
      </p>
    </div>
  );
};

export default Card;
