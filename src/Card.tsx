import React from "react";
export const Card = ({ card }) => {
  return <img src={card.smallImageUrl} alt={card.raw_scientificName} />;
};
