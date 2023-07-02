import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/login" >SignIn</Link>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
 text-align: center;
 font-size: 40px;
 margin-top: 100px;
`
