import React from 'react'
import Navigation from '../components/Navigation'
import { styled } from 'styled-components'

const About = () => {
  return (
    <>
<Navigation />
<AboutContainer>This is AboutPage</AboutContainer>
    </>
  )
}

export default About

const AboutContainer = styled.div`
  text-align: center;
  font-size: 40px;
`;