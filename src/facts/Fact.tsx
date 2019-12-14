import React from "react";
import styled from "styled-components";
import { starSign, frequency, lookingFor } from "../glossary";
const Container = styled.div`
  border: 1px solid #8c8181;
  padding: 2px 8px;
  display: inline-flex;
  border-radius: 16px;
  align-items: center;
  margin: 0 8px 8px 0;
  font-size: 0.85em;
`;
interface IProps {
  type: "starSign" | "drinking" | "smoking" | "lookingFor";
}

export const Fact = ({ type }: IProps) => {
  const getIconByType = () => {
    switch (type) {
      case "drinking":
        return "🍷";
      case "smoking":
        return "🚬";
      case "lookingFor":
        return "🔍";
      case "starSign":
      default:
        return "";
    }
  };
  const getRandomOptionByType = () => {
    switch (type) {
      case "lookingFor":
        return lookingFor[Math.floor(Math.random() * lookingFor.length)];
      case "starSign":
        return starSign[Math.floor(Math.random() * starSign.length)];
      case "drinking":
      case "smoking":
        return frequency[Math.floor(Math.random() * frequency.length)];
      default:
        return "";
    }
  };
  return (
    <Container>
      {getIconByType()}
      {getRandomOptionByType()}
    </Container>
  );
};
