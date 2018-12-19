import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #fbfad3;
  padding: 5rem;
  @media only screen and (max-width: 769px) {
    padding: 3rem;
  }
  .social {
    padding-right: 3rem;
    font-size: 2rem;
  }
`;
const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
`;

const Footer = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column  is-size-3">Subscribe to our newsletter</div>
        <div className="column">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input is-rounded is-large"
                type="text"
                placeholder="Subscribe to us"
              />
            </p>
            <p className="control">
              <a className="button is-primary is-rounded is-large">Subscribe</a>
            </p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Logo className="is-size-2 has-text-primary">PACKRS</Logo>
          <span className="social">
            <i className="fab fa-facebook-f" />
          </span>
          <span className="social">
            <i className="fab fa-twitter" />
          </span>
          <span className="social">
            <i className="fab fa-instagram" />
          </span>
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
