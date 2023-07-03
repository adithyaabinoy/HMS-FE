import React from 'react'
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <h1>HMS</h1>
        <p>Copyright © 2023 lazyCoder.inc</p>
    </FooterContainer>
  )
}

export default Footer;


const FooterContainer =  styled.div`
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 70px;
   color: #000;
   text-align: center;
   border-top: 1px solid lightgrey;
   > h1 {
    margin-top: 5px;
   }
`;