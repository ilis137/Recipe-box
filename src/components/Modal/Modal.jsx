import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 300px;
  height: 400px;
  padding: 15px;
  box-sizing: border-box;
  background: #90caf9;
  border-radius: 5px;
`;

const Modal = props => {
  return <StyledModal />;
};

export default Modal;
