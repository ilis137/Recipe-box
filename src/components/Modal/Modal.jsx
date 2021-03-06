import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 600px;
  overflow: auto;
  background-color: #90caf9;
  height: 500px;
  padding: 15px;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid #90caf9;
  box-shadow: 1px 1px 1px #888;
  z-index: 200;
  position: fixed;
  left: calc(50% - 300px);
  top: 5%;
  transition: all 0.3s ease-out;
  transform: ${props => (props.show ? "translate(0)" : "translateY(-100vh)")};
  opacity: ${props => (props.show ? "1" : "0")};
  @media (max-width: 600px) {
    width: 70%;
    left: 15%;
  }
`;

const Modal = props => {
  return <StyledModal show={props.show}>{props.children}</StyledModal>;
};

export default Modal;
