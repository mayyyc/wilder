import React from "react";
import { getDistance } from "./helper";
import Chance from "chance";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Profile = styled.div`
  margin: 0 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;
const Photo = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 280px;
  max-height: 400px;
  background-position: center center;
  background-size: cover;
`;
const Info = styled.div`
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
const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px 8px;
`;
const Action = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #ededed solid 5px;
  background-color: white;
`;
const Like = styled(FontAwesomeIcon)`
  color: #ef6d81;
`;
const Dismiss = styled(FontAwesomeIcon)`
  color: #8c8181;
`;
const Super = styled(FontAwesomeIcon)`
  color: #14cbcc;
`;
const chance = new Chance();
export const Card = ({ card, latLong, onSwipeCard }) => {
  const km = getDistance(
    card.decimalLatitude,
    card.decimalLongitude,
    latLong.lat,
    latLong.long
  ).toFixed(1);
  return (
    <Container onClick={onSwipeCard}>
      <Profile>
        <Photo
          style={{ backgroundImage: `url(${card.largeImageUrl})`, height: window.innerWidth - 20 }}
        />
        <Info>
          <Name>
            {chance.first({ gender: "female" })}, {chance.age({ type: "adult" })}
          </Name>
          <Dist>{km}km away</Dist>
        </Info>
      </Profile>
      <Actions>
        <Action onClick={onSwipeCard}>
          <Dismiss icon={faTimes} />
        </Action>
        <Action>
          <a
            href={`https://biocache.ala.org.au/occurrences/${card.uuid}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Super icon={faStar} />
          </a>
        </Action>
        <Action onClick={onSwipeCard}>
          <Like icon={faHeart} />
        </Action>
      </Actions>
    </Container>
  );
};
