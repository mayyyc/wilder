import React from "react";
import { getDistance } from "./helper";
import Chance from "chance";
import styled from "styled-components";
import { bio } from "./glossary";
import { ImageGallery } from "./ImageGallery";
import { Facts } from "./facts/Facts";
const Profile = styled.div`
  margin: 0 8px;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  position: absolute;
`;
const Basic = styled.div`
  padding: 24px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 28px;
`;
const Dist = styled.div`
  color: #8c8181;
  font-size: 12px;
`;
const Details = styled.div`
  padding: 0 8px 24px;
`;
const Bio = styled.div`
  margin-bottom: 24px;
`;
const chance = new Chance();
export const Card = ({ card, latLong, index }) => {
  const km = getDistance(
    card.decimalLatitude,
    card.decimalLongitude,
    latLong.lat,
    latLong.long
  ).toFixed(1);
  return (
    <Profile index={index}>
      <ImageGallery imageUrls={card.imageUrls} />
      <Basic>
        <Name>
          {chance.first({ gender: "female" })},{" "}
          {Math.floor(Math.random() * 10 + 23)}
        </Name>
        <Dist>{km}km away</Dist>
      </Basic>
      <Details>
        <Bio>
          {Math.random() > 0.5 && bio[Math.floor(Math.random() * bio.length)]}
        </Bio>
        <Facts />
      </Details>
    </Profile>
  );
};
