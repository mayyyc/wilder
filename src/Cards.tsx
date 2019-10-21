import React, { useState } from "react";
import drop from "lodash/drop";
import isEmpty from "lodash/isEmpty";
import { Card } from "./Card";
export const Cards = ({ animals, onFinished }) => {
  const [cards, setCards] = useState(animals);
  const handleSwipeCard = () => {
    if (isEmpty(cards)) onFinished();
    setCards(drop(cards));
  };
  if (isEmpty(cards)) return <div></div>;
  return (
    <div onClick={handleSwipeCard}>
      <Card card={cards[0]} />
    </div>
  );
};
