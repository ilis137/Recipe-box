import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 600px;
  height: 400px;
  padding: 15px;
  box-sizing: border-box;
  background: white;
  border-radius: 5px;
  border: 1px solid #90caf9;
  box-shadow: 1px 1px 1px #888;
  z-index: 200;
  position: fixed;
  padding: 16px;
  left: calc(50% - 300px);
  top: 15%;
  transition: all 0.3s ease-out;
  transform: ${props => (props.show ? "translate(0)" : "translateY(-100vh)")};
  opacity: ${props => (props.show ? "1" : "0")};
`;

const Modal = props => {
  return <StyledModal show={props.show} />;
};

export default Modal;
