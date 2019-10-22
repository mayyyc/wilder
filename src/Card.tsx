import React from "react";
import { getDistance } from "./helper";
import Chance from "chance";
const chance = new Chance();
export const Card = ({ card, latLong }) => {
  const km = getDistance(
    card.decimalLatitude,
    card.decimalLongitude,
    latLong.lat,
    latLong.long
  ).toFixed(1);
  return (
    <>
      <img src={card.smallImageUrl} alt={card.raw_scientificName} />
      <div>{km}km</div>
      <div>{chance.first({ gender: "female" })}</div>
      <div>{chance.age({ type: "adult" })}</div>
      <a href={`https://biocache.ala.org.au/occurrences/${card.uuid}`} target="_blank">
        super like
      </a>
    </>
  );
};
