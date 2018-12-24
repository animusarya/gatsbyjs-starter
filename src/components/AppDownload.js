/* global swal:true */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.section`
  padding: 5rem 0rem;
  .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
    .downloads {
      display: flex !important;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .mockup {
      @media only screen and (max-width: 769px) {
        padding-bottom: 5rem;
      }
    }
  }
  @media only screen and (max-width: 769px) {
    padding: 0rem;
    padding-top: 2rem;
  }
  .item-one {
    justify-content: flex-end !important;
    margin-right: 2rem;
    @media only screen and (max-width: 769px) {
      margin-right: 0rem;
    }
  }
  .item-two {
    justify-content: flex-start !important;
  }
  .subtitle {
    margin-top: 1rem !important;
  }
  .button {
    width: 12rem;
    height: 4rem;
  }
  .is-secondary {
    border-color: transparent !important;
  }
  .fa-google-play,
  .fa-apple {
    margin-right: 0.5rem;
  }
  .level {
    padding: 1rem;
  }
`;

const AppDownload = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column is-half downloads">
          <h1 className="title has-font-primary has-text-weight-bold is-size-1">
            Download Packrs App
          </h1>
          <h2 className="subtitle">
            App is available on both android and Ios Platforms
          </h2>
          <div className="level">
            <div className="level-item item-one">
              <button
                className="button is-rounded is-primary is-size-5"
                type="button"
                onClick={() => swal('Coming soon !')}
              >
                <i className="fab fa-google-play" /> Google Play
              </button>
            </div>
            <div className="level-item item-two">
              <button
                className="button is-rounded is-secondary is-size-5"
                type="button"
                onClick={() => swal('Coming soon !')}
              >
                <i className="fab fa-apple" /> App Store
              </button>
            </div>
          </div>
        </div>
        <div className="column mockup">
          <img src="/images/mockup-iphone-new.webp" alt="mockup" />
        </div>
      </div>
    </div>
  </Container>
);

export default AppDownload;
