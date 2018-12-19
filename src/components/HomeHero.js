import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  background-image: url('../images/delivery-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  .hero-body {
    padding-top: 12rem !important;
    .is-info {
      background-color: #1f95a6 !important;
    }
    .subtitle {
      line-height: 1.8rem;
    }
  }
`;

const HomeHero = () => (
  <Container className="hero is-large">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-uppercase has-font-primary is-size-2 has-text-weight-bold has-text-white">
              The most faster <span className="has-text-primary">delivery</span>{' '}
              hub
            </h1>
            <h2 className="subtitle has-text-white has-text-weight-light">
              Order from anywhere in the business – from local hotspots to
              national favourites – and get the items you love delivered fast,
              right to your door.
            </h2>
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input is-large is-rounded"
                  type="text"
                  placeholder="Enter Mobile Number"
                />
              </p>
              <p className="control">
                <a className="button is-info is-large is-rounded">SUBMIT</a>
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
