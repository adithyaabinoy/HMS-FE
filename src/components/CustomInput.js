import React from "react";
import { styled } from "styled-components";

const CustomInput = ({ placeholder, type }) => {
  return (
    <InputFieldContainer>
      <InputForm>
        <InputField placeholder={placeholder} type={type} />
      </InputForm>
    </InputFieldContainer>
  );
};

export default CustomInput;

const InputFieldContainer = styled.div``;

const InputForm = styled.form`
  margin-top: 15px;
`;

const InputField = styled.input`
  width: 210px;
  margin: 3px;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;
