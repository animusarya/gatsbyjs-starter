import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.footer`
  .footer-area {
    background-color: #33b7b7 !important;
    a {
      padding: 0 12px;
      border-right: 1px solid white;
      color: #fff;
    }
    #faq {
      border-right: 1px solid #00b7b8 !important;
    }
  }
`;

const Footer = () => (
  <Container>
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <Link to="/contact/">Contact</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/about/">About</Link>
          <Link to="/terms-and-conditions/">T&C</Link>
          <Link to="/fAQ/" id="faq">
            FAQ
          </Link>
          <p>Copyright &copy;2018 | All rights reserved</p>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
