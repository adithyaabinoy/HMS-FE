import React from "react";
import { styled } from "styled-components";
import image from "../asset/home.png";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <div>
          <h1>Hospital Management Systems...</h1>
          <p>Health is the condition of wisdom and the sign is cheerfulness</p>
          <TagButton>BOOK AN APPOINTMENT</TagButton>
        </div>
        <img src={image} alt="img" />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  /* background-image: url(image); */

  > div {
    width: 50%;
    margin-left: 10%;
    > h1 {
      font-size: 7rem;
    }

    > p {
      margin-top: 25px;
      font-size: 2rem;
      width: 70%;
    }
  }
  > img {
    width: 40%;
  }
`;

const TagButton = styled.p`
  /* width: 120px; */
  cursor: pointer;
  background-color: #4361ee;
  color: #fff;
  padding: 12px;
  border-radius: 40px;
  margin: 10% 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 900;
  position: relative;
  &:hover {
    padding-right: 14px;
    padding-left: 8px;
    scale: 1.1;
  }

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 30px;
    top: 13px;
    right: -20px;
    transition: 0.5s;
  }

  &::before {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 30px;
    top: 13px;
    left: -20px;
    transition: 0.5s;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }

  &:hover::before {
    opacity: 1;
    left: 10px;
  }
`;
