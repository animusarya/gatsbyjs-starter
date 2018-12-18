import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  .button {
    width: 20rem;
    height: 5rem;
  }
  .is-secondary {
    border-color: transparent !important;
  }
`;

const AppDownload = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <h1 className="title">Download Packrs App</h1>
      <h2 className="subtitle">
        App is available on both android and Ios Platforms
      </h2>
      <div className="level">
        <div className="level-item">
          <button
            className="button is-rounded is-primary is-size-4"
            type="button"
          >
            <i className="fab fa-google-play" /> Google Play
          </button>
        </div>
        <div className="level-item">
          <button
            className="button is-rounded is-secondary is-size-4"
            type="button"
          >
            <i className="fab fa-apple" /> App Store
          </button>
        </div>
      </div>
    </div>
  </Container>
);

export default AppDownload;
