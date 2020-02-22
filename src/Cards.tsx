import React, { useState, useEffect } from "react";
import drop from "lodash/drop";
import isEmpty from "lodash/isEmpty";
import { Card } from "./Card";
import { Swipe } from "./Swipe";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import Chance from "chance";
import { bio } from "./glossary";
import { FactType } from "./Fact";
import { starSign, frequency, lookingFor } from "./glossary";
const chance = new Chance();

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Actions = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 100;
  background-image: linear-gradient(
    rgba(237, 237, 237, 0),
    rgba(237, 237, 237, 1)
  );
`;
const Action = styled.div`
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 35px;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #ededed solid 3px;
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
  const generateRandomFacts = () => {
    let facts = [];
    Math.random() < 0.8 &&
      facts.push({
        type: FactType.starSign,
        option: starSign[Math.floor(Math.random() * starSign.length)]
      });
    Math.random() < 0.3 &&
      facts.push({
        type: FactType.drinking,
        option: frequency[Math.floor(Math.random() * frequency.length)]
      });
    Math.random() < 0.6 &&
      facts.push({
        type: FactType.lookingFor,
        option: lookingFor[Math.floor(Math.random() * lookingFor.length)]
      });
    Math.random() < 0.2 &&
      facts.push({
        type: FactType.smoking,
        option: frequency[Math.floor(Math.random() * frequency.length)]
      });
    return facts;
  };
  useEffect(() => {
    setCards(
      animals.map(animal => ({
        imageUrls: animal.imageUrls,
        decimalLatitude: animal.decimalLatitude,
        decimalLongitude: animal.decimalLongitude,
        name: chance.first({ gender: "female" }),
        age: Math.floor(Math.random() * 10 + 23),
        bio: Math.random() > 0.5 && bio[Math.floor(Math.random() * bio.length)],
        facts: generateRandomFacts()
      }))
    );
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
        {cards.map((card, i) => {
          if (i === 0)
            return (
              <Swipe key={`swipe-${i}`} handleSwipeCard={handleSwipeCard}>
                <Card
                  key={`card-${i}`}
                  card={card}
                  index={i}
                  latLong={latLong}
                />
              </Swipe>
            );
          else
            return (
              <Card key={`card-${i}`} card={card} index={i} latLong={latLong} />
            );
        })}
      </CardsContainer>
      <Actions>
        <Action onClick={handleSwipeCard}>
          <Dismiss icon={faTimes} />
        </Action>
        <Action>
          <a
            href={`https://biocache.ala.org.au/occurrences/${cards[0].uuid}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Super icon={faStar} />
          </a>
        </Action>
        <Action onClick={handleSwipeCard}>
          <Like icon={faHeart} />
        </Action>
      </Actions>
    </Container>
  );
};
