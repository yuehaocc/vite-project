import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

export default () => (
  <Wrapper>
    <Title>Hello World, this is my first styled component!</Title>
  </Wrapper>
);
