import React from "react";
import { styled } from "styled-components";
import image from "../asset/about.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <>
      <AboutContainer>
        <Sidebar />
        <AboutImageContainer>
          <img alt="about-img" src={image} />
        </AboutImageContainer>
        <AboutInfoContainer>
          <AboutInfoSection>
            <h1>About HMS.</h1>
            <h3>Advancing the Delivery of Health Care</h3>
          </AboutInfoSection>
          <AboutInfoSection>
            <div>
              <div>
                <TagButton>What is HMS</TagButton>
                <Info>
                  HMS is a healthcare platform that focus more on making an
                  meaningful difference in patients lives.
                </Info>
              </div>
              <div>
                <TagButton>Our Goals</TagButton>{" "}
                <Info>When life depends on Medical Technology</Info>
              </div>
              <div>
                <TagButton>Integrated</TagButton>{" "}
                <Info>
                  <li>AIMS</li>
                  <li>WHO</li>
                  <li>PGI</li>
                  <li>Serum Institute</li>
                </Info>
              </div>
            </div>
          </AboutInfoSection>
          <AboutInfoSection>
            <DocList>
              <h3>HMS. Doctor List</h3> <ArrowRightAltIcon />
            </DocList>
          </AboutInfoSection>
          <AboutInfoSection>
            <DocList>
              <h3>Location</h3> <ArrowRightAltIcon />
            </DocList>
          </AboutInfoSection>
        </AboutInfoContainer>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  gap: 3rem;
  height: 80vh;
`;

const AboutImageContainer = styled.div`
  > img {
    border-radius: 30px;
    margin-top: 10px;
  }
`;

const AboutInfoContainer = styled.div`
  margin: 1.3rem 1rem;

  > div > h1 {
    font-size: 4rem;
  }

  > div > h3 {
    margin: 20px 0;
    width: 100%;
    font-size: 2rem;
  }
`;

const AboutInfoSection = styled.div`
  width: 50vw;
  padding-right: 50px;
  padding-bottom: 1.3rem;
  border-bottom: 2px solid #d3d3d3;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5%;
    height: 25vh;
  }
`;

const TagButton = styled.p`
  cursor: pointer;
  background-color: #4361ee;
  color: #fff;
  padding: 12px;
  border-radius: 25px;
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
    font-size: 20px;
    top: 10px;
    right: -20px;
    transition: 0.5s;
  }

  &::before {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    top: 10px;
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

const Info = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

const DocList = styled.div`
  display: flex;
  align-items: center;
  height: 70px !important;
  > .MuiSvgIcon-root {
    padding-left: 29rem;
    font-size: 3rem;
    cursor: pointer;
    &:hover {
      scale: 1.2;
    }
  }
`;
