import React from "react";
import { Fact } from "./Fact";
export const Facts = () => {
  return (
    <div>
      {Math.random() < 0.8 && <Fact type="starSign" />}
      {Math.random() < 0.3 && <Fact type="drinking" />}
      {Math.random() < 0.6 && <Fact type="lookingFor" />}
      {Math.random() < 0.2 && <Fact type="smoking" />}
    </div>
  );
};
