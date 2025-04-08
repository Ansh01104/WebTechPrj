// FlipCard.jsx
import React from "react";
import Card from "./Card";

const FlipCard = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} imageSrc={card.imageSrc} altText={card.altText} />
      ))}
    </div>
  );
};

export default React.memo(FlipCard);
