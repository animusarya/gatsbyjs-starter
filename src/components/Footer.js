import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Subscribe from './Subscribe';

const Container = styled.section`
  background-color: #e9f8ef;
  padding: 5rem;
  @media only screen and (max-width: 769px) {
    padding: 3rem;
  }
  .social {
    padding-right: 3rem;
    font-size: 2rem;

    @media only screen and (max-width: 769px) {
      padding-right: 1rem;
    }
  }
`;
const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
`;

const Footer = () => (
  <Container className="section">
    <div className="container">
      <Subscribe />
      <div className="columns">
        <div className="column">
          <Logo className="is-size-2 has-text-primary has-text-centered-mobile">
            PACKRS
          </Logo>
          <div className="has-text-centered-mobile">
            <a
              className="social has-text-dark"
              href="https://www.facebook.com/PackrsOfficial/"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social has-text-dark"
              href="https://twitter.com/PackrsOfficial"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social has-text-dark"
              href="https://www.instagram.com/packrs_official/"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="column" />
        <div className="column" />
      </div>
      <div className="has-text-centered">
        Copyright 2018 All Rights Reserved
      </div>
    </div>
  </Container>
);

export default Footer;
