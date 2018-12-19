import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #fbfad3;
  padding: 5rem;
  .social {
    padding: 2rem;
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
        <div className="column has-text-primary is-size-3">
          Subscribe to our newsletter
        </div>
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
              <a className="button is-primary is-rounded is-large">Search</a>
            </p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Logo className="is-size-2 has-text-primary">PACKRS</Logo>
        </div>
        <div className="column">
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
      </div>
    </div>
  </Container>
);

export default Footer;
