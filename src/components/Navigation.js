import React from "react";
import { styled } from "styled-components";
import logo from "../../src/asset/logo-1.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationInnerContainer>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </LogoContainer>

        <NavigationMenus>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/login">Login</Link>
        </NavigationMenus>
      </NavigationInnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  border-bottom: 1px solid lightgray;
  height: 10%;
`;

const NavigationInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  margin: 0.5rem;

  > a > img {
    width: 80px;
    height: 80px;
    color: blue;
    border-radius: 50%;
    border: 3px solid blue;
  }
`;

const NavigationMenus = styled.div`
  display: flex;
  > a {
    text-decoration: none;
    color: #000;
    margin: 0 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;
