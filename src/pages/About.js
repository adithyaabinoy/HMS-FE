import React from 'react'
import Navigation from '../components/Navigation'
import { styled } from 'styled-components'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
<Navigation />
<AboutContainer>This is AboutPage</AboutContainer>
<Footer />
    </>
  )
}

export default About

const AboutContainer = styled.div`
  text-align: center;
  font-size: 40px;
`;