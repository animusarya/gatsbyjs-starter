import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  background-image: url('../images/hero-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
`;

const HomeHero = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-uppercase has-font-primary is-size-2 has-text-weight-bold">
              The most faster <span className="has-text-primary">delivery</span>{' '}
              hub
            </h1>
            <h2 className="subtitle">
              Order from anywhere in the business – from local hotspots to
              national favourites – and get the items you love delivered fast,
              right to your door.
            </h2>
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </Container>
);

export default HomeHero;
