import React from "react";
import styled from "styled-components";

const StyledBackDrop = styled.div`
  width: 100%;
  height: 100%;
  z-index: 120;
  position: fixed;
  background-color: #333;
  top: 0;
  left: 0;

  transform: ${props => (props.show ? "translate(0)" : "translateY(-100vh)")};
  opacity: ${props => (props.show ? "0.5" : "0")};
`;

const BackDrop = props => {
  return <StyledBackDrop show={props.show} onClick={props.canceled} />;
};

export default BackDrop;
