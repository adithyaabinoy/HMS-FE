import React from "react";
import { styled } from "styled-components";

const CustomInput = ({ placeholder, type, onChange, value }) => {
  return (
    <InputFieldContainer>
      <InputField
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputFieldContainer>
  );
};

export default CustomInput;

const InputFieldContainer = styled.div``;

const InputField = styled.input`
  width: 210px;
  margin: 3px;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;
