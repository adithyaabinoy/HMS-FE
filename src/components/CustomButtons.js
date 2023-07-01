import React from "react";
import { styled } from "styled-components";

const CustomButtons = ({ name, type, width }) => {
  return (
    <CustomButtonsContainer>
      <CustomButton style={{ width: width }}>
        <span>{name}</span>
      </CustomButton>
    </CustomButtonsContainer>
  );
};

export default CustomButtons;

const CustomButtonsContainer = styled.div``;

const CustomButton = styled.button`
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  background-color: #5ca1e1;
  margin: 8px 15px;
  text-align: center;
  font-weight: bold;
  position: relative;
  border: none;

  &:hover {
    padding-right: 14px;
    padding-left: 8px;
  }

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    top: 5px;
    right: -20px;
    transition: 0.5s;
  }

  &:hover:after {
  opacity: 1;
  right: 10px;
}
`;
