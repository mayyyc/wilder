import React, { useState, useEffect } from "react";
import drop from "lodash/drop";
import isEmpty from "lodash/isEmpty";
import { Card } from "./Card";
export const Cards = ({ animals, onFinished, latLong }) => {
  const [cards, setCards] = useState(animals);
  useEffect(() => {
    setCards(animals);
  }, [animals]);
  const handleSwipeCard = () => {
    setCards(drop(cards));
    if (cards.length === 1) {
      onFinished();
    }
  };
  if (isEmpty(cards)) {
    return <div></div>;
  }
  return <Card card={cards[0]} latLong={latLong} onSwipeCard={handleSwipeCard} />;
};
