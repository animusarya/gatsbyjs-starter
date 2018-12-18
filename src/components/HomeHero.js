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
  <Container className="hero is-large">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Fullheight title</h1>
        <h2 className="subtitle">Fullheight subtitle</h2>
      </div>
    </div>
  </Container>
);

export default HomeHero;
