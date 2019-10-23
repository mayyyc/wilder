import React from "react";
import styled from "styled-components";
const Container = styled.div`
  text-align: center;
  margin-bottom: 84px;
`;
const Kangaroo = styled.img`
  margin-bottom: 32px;
`;
export const Loading = () => (
  <Container>
    <Kangaroo width="150" src="/kangaroo.svg" alt="Kangaroo" />
    <div>Preparing to get you wilder...</div>
  </Container>
);
