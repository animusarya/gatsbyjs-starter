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

  .row Link {
    font-size: 18px;
  }
  .footer-area {
    @media screen and (max-width: 768px) {
      height: 140px;
    }
  }
`;

const Footer = () => (
  <Container>
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <Link to="/contact/">Contact</Link>
          <Link to="/blog/">News</Link>
          <Link to="https://airtable.com/shrzgjKLLyiwUVRA0">
            Apply as Business
          </Link>
          <a href="https://airtable.com/shrNYyLynebosW850">
            Apply as Delivery Partner
          </a>
          <a href="https://perminderklair.freshteam.com/jobs/">Career</a>
          <Link to="/fAQ/" id="faq">
            FAQ
          </Link>
          <Link to="/privacy-policy/">Privacy Policy</Link>
          <Link to="/terms-and-conditions/">T&C</Link>
          <a href="https://packrs-334.freshstatus.io/" target="_blank" rel="noopener noreferrer">
            Service Stats
          </a>
          <p>Copyright &copy;2019 | All rights reserved | Made with ❤️ in Punjab, India, and on the Internet.</p>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
