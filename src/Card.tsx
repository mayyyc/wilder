import React from "react";
import { getDistance } from "./helper";
import styled from "styled-components";
import { ImageGallery } from "./ImageGallery";
import { Fact } from "./Fact";
const Profile = styled.div`
  margin: 0 8px;
  width: calc(100% - 16px);
  height: calc(100% - 8px);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow-y: scroll;
  border: 1px solid #f2f2f2;
  position: absolute;
  z-index: ${props => 10 - props.index};
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
  padding: 0 8px 48px;
`;
const Bio = styled.div`
  margin-bottom: 24px;
  white-space: pre-wrap;
`;
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
        <Name>{`${card.name}, ${card.age}`}</Name>
        <Dist>{km}km away</Dist>
      </Basic>
      <Details>
        {card.bio && <Bio>{card.bio}</Bio>}
        {card.facts &&
          card.facts.map((fact, i) => (
            <Fact key={i} type={fact.type} option={fact.option} />
          ))}
      </Details>
    </Profile>
  );
};
