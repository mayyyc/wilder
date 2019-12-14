import React, { useState, useEffect } from "react";
import drop from "lodash/drop";
import isEmpty from "lodash/isEmpty";
import { Card } from "./Card";
import { Swipe } from "./Swipe";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const CardsContainer = styled.div`
  width: 100%;
  position: relative;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px 8px;
  box-sizing: border-box;
  width: 100%;
  @media screen and (max-width: 320px) {
    position: absolute;
    bottom: 85px;
  }
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
  return (
    <Container>
      <CardsContainer>
        {/* {cards.map((card, i) => {
          if (i === 0)
            return (
              <Swipe>
                <Card card={cards[i]} index={i} latLong={latLong} />
              </Swipe>
            );
          else return <Card card={cards[i]} index={i} latLong={latLong} />;
        })} */}
        <Card card={cards[0]} index={0} latLong={latLong} />
      </CardsContainer>
      <Actions>
        <Action onClick={handleSwipeCard}>
          <Dismiss icon={faTimes} />
        </Action>
        {/* <Action>
          <a
            href={`https://biocache.ala.org.au/occurrences/${card.uuid}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Super icon={faStar} />
          </a>
        </Action> */}
        <Action onClick={handleSwipeCard}>
          <Like icon={faHeart} />
        </Action>
      </Actions>
    </Container>
  );
};
