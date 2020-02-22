import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const Swipe = ({ children, handleSwipeCard }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleSwiping = ({ deltaX, deltaY, dir }) => {
    if (dir === "Left" || dir === "Right") {
      setPosition({ x: -deltaX, y: -deltaY });
    }
  };
  const handleSwiped = ({ absX }) => {
    setPosition({ x: 0, y: 0 });
    if (absX > window.innerWidth / 2) {
      handleSwipeCard();
    }
  };
  const handlers = useSwipeable({
    onSwiping: handleSwiping,
    onSwiped: handleSwiped
  });
  return (
    <Container
      {...handlers}
      style={{
        top: position.y,
        left: position.x,
        transform: `rotate(${Math.floor(position.x / 10)}deg)`
      }}
    >
      {children}
    </Container>
  );
};
