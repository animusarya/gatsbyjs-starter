import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
    left: calc(0%);
  }
  .section-title h2:after {
    background-color: #fff;
  }
  .form-steps {
    display: block;
    width: 100%;
    position: relative;
    margin: 40px 0;
  }
  .form-steps:after {
    content: '';
    display: table;
    clear: both;
  }
  .form-steps__item {
    padding: 0;
    position: relative;
    display: block;
    float: left;
    width: 33.333%;
    text-align: center;
  }
  .form-steps__item-content {
    display: inline-block;
  }
  .form-steps__item-icon {
    background: #eceff1;
    color: #8191ab;
    display: block;
    border-radius: 100%;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto 10px auto;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    z-index: 2;
  }
  .form-steps__item-text {
    font-size: 13px;
    color: #8191ab;
    font-weight: 500;
  }
  .form-steps__item-line {
    display: inline-block;
    height: 3px;
    width: 100%;
    background: #cfd8dc;
    float: left;
    position: absolute;
    left: -50%;
    top: 12px;
    z-index: 1;
  }
  .form-steps__item--active .form-steps__item-icon {
    background: #00aeef;
    color: #fff;
  }
  .form-steps__item--active .form-steps__item-text {
    color: #4f5e77;
  }
  .form-steps__item--active .form-steps__item-line {
    background: #00aeef;
  }
  .form-steps__item--completed .form-steps__item-text {
    color: #4f5e77;
  }
  .form-steps__item--completed .form-steps__item-icon {
    background: #00aeef;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkuMTIgNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTIgMS4wNkw4LjA2IDAgMy4xOCA0Ljg4IDEuMDYgMi43NiAwIDMuODIgMy4xOCA3bDUuOTQtNS45NHoiLz48L3N2Zz4=);
    color: transparent;
    background-size: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    width: 25px;
    height: 25px;
    line-height: 25px;
  }
  .form-steps__item--completed .form-steps__item-line {
    background: #00aeef;
  }
  .title {
    font-size: x-large;
    color: #000;
    @media screen and (max-width: 769px) {
      font-size: 18px;
    }
  }
  .section-title {
    text-align: left;
  }
  .description {
    @media screen and (max-width: 769px) {
      font-size: 1.2rem;
      line-height: 2;
    }
  }
`;

const HowItWorks = () => (
  <Container className="feature-area bg-gray ptb--100" id="feature">
    <div className="container">
      <div className="section-title">
        <h2>How it works</h2>
      </div>
      <nav className="form-steps">
        <div className="form-steps__item ">
          <div className="form-steps__item-content">
            <span className="form-steps__item-icon">1</span>
            <span className="form-steps__item-text title">Log in</span>
            <div className="description">
              Get on the road and log in to the Uber Partner app to begin
              accepting delivery requests.
            </div>
          </div>
        </div>
        <div className="form-steps__item">
          <div className="form-steps__item-content">
            <span className="form-steps__item-icon">2</span>
            <span className="form-steps__item-line" />
            <span className="form-steps__item-text title">
              Pick up. Drop off.
            </span>
            <div className="description">
              Navigation and information is provided in the app to help
              deliveries run smoothly.
            </div>
          </div>
        </div>
        <div className="form-steps__item">
          <div className="form-steps__item-content">
            <span className="form-steps__item-icon">3</span>
            <span className="form-steps__item-line" />
            <span className="form-steps__item-text title">Earn money</span>
            <div className="description">
              Track your earnings and get paid weekly.
            </div>
          </div>
        </div>
      </nav>
    </div>
  </Container>
);

export default HowItWorks;
