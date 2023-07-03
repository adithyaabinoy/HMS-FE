import React from "react";
import { styled } from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeContainer>
        <HomeInnerContainerOne></HomeInnerContainerOne>
        <HomeInnerContainerTwo></HomeInnerContainerTwo>
        <HomeInnerContainerThree>
          <h1>A passion for making people better</h1>
          <p>
            At HMS Asia, we are determined to provide our patient with
            excellence in healthcare services
          </p>
        </HomeInnerContainerThree>
        <HomeInnerContainerFour></HomeInnerContainerFour>
        <HomeInnerContainerFive></HomeInnerContainerFive>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const HomeInnerContainerOne = styled.div`
  width: 10%;
  height: 100%;
  background-image: url("https://w0.peakpx.com/wallpaper/942/910/HD-wallpaper-man-wearing-medical-mask-and-robe.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;

const HomeInnerContainerTwo = styled.div`
  width: 15%;
  height: 100%;
  background-image: url("https://c1.wallpaperflare.com/preview/525/529/148/baby-cute-birth-mom.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;
const HomeInnerContainerThree = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("https://wallpapercrafter.com/th800/273376-surgery-hospital-medical-and-doctor-hd.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  color: #fff;
  font-weight: 900;
  text-align: center;
  font-size: 1.5rem;
  > h1 {
    margin-top: 17rem;
    z-index: 999;
  }
  > p {
    z-index: 999;
  }
`;
const HomeInnerContainerFour = styled.div`
  width: 15%;
  height: 100%;
  background-image: url("https://e0.pxfuel.com/wallpapers/578/919/desktop-wallpaper-doctor-female-doctor.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;
const HomeInnerContainerFive = styled.div`
  width: 10%;
  height: 100%;
  background-image: url("https://w0.peakpx.com/wallpaper/418/663/HD-wallpaper-man-made-medical-microscope.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;
