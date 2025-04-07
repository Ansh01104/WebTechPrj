import React from "react";

const Card = ({ imageSrc }) => {
  return (
    <div className="card-container border rounded-lg   p-2">
      <img src={imageSrc} alt="Card image" className="w-[285px] h-[250px] object-cover rounded-xl" />
    </div>
  );
};

export default Card;
