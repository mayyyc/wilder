import React from "react";
import styled from "styled-components";
const Container = styled.div`
  text-align: center;
  margin-bottom: 84px;
`;
const Kangaroo = styled.img`
  margin-bottom: 32px;
`;
const Button = styled.div`
  color: white;
  background-color: #ef6d81;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 16px;
  border-radius: 4px;
  cursor: pointer;
`;
export const Nothing = ({ onClickRandomLocation }) => (
  <Container>
    <Kangaroo width="80" src="/standing_kangaroo.svg" alt="Kangaroo" />
    <div>Nothing is wilder than you are.</div>
    <Button onClick={onClickRandomLocation}>Try a Random Location</Button>
  </Container>
);
