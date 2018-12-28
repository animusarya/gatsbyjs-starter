import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #dad4e1;
  .button {
    box-shadow: 0px 13px 21px -10px rgba(0, 0, 0, 0.3) !important;
  }
  @media only screen and (max-width: 769px) {
    .input.is-large,
    .textarea.is-large {
      font-size: 1rem !important;
      height: 3rem !important;
      padding-left: 1rem !important;
    }
    .button {
      font-size: 1rem !important;
      height: 3rem !important;
      padding-left: 1rem !important;
    }
  }

  .hero-body {
    padding-bottom: 0rem !important;
    padding-top: 5rem !important;
    .is-info {
      background-color: #1f95a6 !important;
    }
    .subtitle {
      line-height: 1.8rem;
    }
    @media only screen and (max-width: 769px) {
      padding-top: 3rem !important;
      padding-bottom: 5rem !important;
    }
    @media screen and (max-width: 1366px) and (min-width: 769px) {
      padding-top: 6rem !important;
      padding-bottom: 5rem !important;
    }
  }
`;

const HomeHero = () => (
  <Container className="hero is-large">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column hero-text">
            <h1 className="title is-uppercase has-font-primary is-size-2 has-text-weight-bold">
              The most faster{' '}
              <span className="has-text-primary">delivery </span>
              hub
            </h1>
            <h2 className="subtitle  has-text-weight-light">
              Order from anywhere in the business – from local hotspots to
              national favourites – and get the items you love delivered fast,
              right to your door. Order now
            </h2>
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input is-large is-medium-mobile"
                  type="text"
                  placeholder="Enter Mobile Number"
                  aria-label="phone"
                />
              </p>
              <p className="control">
                <a className="button is-primary is-large is-medium-mobile">
                  ORDER
                </a>
              </p>
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/scooter_1.gif" alt="scooter" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeHero;
