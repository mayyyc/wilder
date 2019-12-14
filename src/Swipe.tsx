import React, { Fragment } from "react";
import { useSwipeable } from "react-swipeable";
export const Swipe = ({ children }) => {
  const handleSwiped = () => {};
  const handlers = useSwipeable({ onSwiped: handleSwiped });
  return <Fragment {...handlers}>{children}</Fragment>;
};
