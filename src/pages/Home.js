import React from "react";
import { styled } from "styled-components";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeContainer>This is HomePage</HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  text-align: center;
  font-size: 40px;
`;
