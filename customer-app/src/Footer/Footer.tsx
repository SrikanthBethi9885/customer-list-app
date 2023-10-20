import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding:20px;
`;

const FooterStyle = styled.footer`
  background-color: #2ecc71;
  color: white;
  padding:5px 0;
  width:100%;
`;

const Footer = () => {
    return (
        <Wrapper>
            <FooterStyle>
          <p>&copy; {new Date().getFullYear()} <b>HM VILLAGES.</b> All Rights Reserved For HM VILLAGES.</p>
            </FooterStyle>

        </Wrapper>
    )
}

export default Footer
