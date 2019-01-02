import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  .footer-area {
    background-color: #33b7b7 !important;
  }
`;

const Footer = () => (
  <Container>
    <div className="footer-area">
      <div className="container">
        <p>Copyright &copy;2018 | All rights reserved</p>
      </div>
    </div>
  </Container>
);

export default Footer;
