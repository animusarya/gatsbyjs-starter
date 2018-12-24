import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-image: url('../images/background.png');
  background-size: 88%;
  background-repeat: no-repeat;
  background-position: bottom right;
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

  @media only screen and (max-width: 769px) {
    background-size: 0 0;
  }

  .hero-body {
    padding-bottom: 13rem !important;
    padding-top: 10rem !important;
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
                  className="input is-large is-rounded is-medium-mobile"
                  type="text"
                  placeholder="Enter Mobile Number"
                />
              </p>
              <p className="control">
                <a className="button is-primary is-large is-rounded is-medium-mobile">
                  Order
                </a>
              </p>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </Container>
);

export default HomeHero;
