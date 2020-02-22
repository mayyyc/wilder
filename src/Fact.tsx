import React from "react";
import styled from "styled-components";
import { starSign, frequency, lookingFor } from "./glossary";
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
  type: FactType;
  option: string;
}

export enum FactType {
  "starSign",
  "drinking",
  "smoking",
  "lookingFor"
}

export const Fact = ({ type, option }: IProps) => {
  const getIconByType = () => {
    switch (type) {
      case FactType.drinking:
        return "🍷";
      case FactType.smoking:
        return "🚬";
      case FactType.lookingFor:
        return "🔍";
      case FactType.starSign:
      default:
        return "";
    }
  };

  return (
    <Container>
      {getIconByType()}
      {option}
    </Container>
  );
};
