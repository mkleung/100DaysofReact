import React, { useState } from "react";
import styled from "styled-components";

// colors
// https://coolors.co/8b94a3-8cfbde-0fff95-06ba63-103900

const NavStyle = styled.div`
  width: 100%;
  height: 50px;
  background: #0fff95;
  color: #103900;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const App = props => {
  return <NavStyle>Simple Tetris</NavStyle>;
};
export default App;
