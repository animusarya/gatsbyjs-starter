import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px !important;
  padding: 5rem;
  @media screen and (max-width: 769px) {
    padding: 0rem;
  }
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 600 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
  }
`;

const CourierServiceArea = () => (
  <Container className="service-area">
    <div className="container">
      <div className="section-title">
        <h2>Deliver Packrs orders</h2>
        <p>Make money on the go</p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="service-single">
            <img src="/images/courier-feature-one.svg" alt="serviceimage" />
            <h2>Your vehicle, your time</h2>
            <p>
              Grab your car, bike, scooter, or even shoes, and deliver whenever
              you want—for an hour, a weekend, or throughout the week.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 col-6">
          <div className="service-single">
            <img src="/images/courier-feature-two.svg" alt="serviceimage" />
            <h2>Weekly payments</h2>
            <p>
              Get paid once a week and easily keep track of money you've made
              within the driver app.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 col-6">
          <div className="service-single">
            <img src="/images/courier-feature-three.svg" alt="serviceimage" />
            <h2>Enjoy your city</h2>
            <p>
              Between picking up and dropping off deliveries, it’s just you and
              the road—relax, bump your music, and enjoy cruising around town.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CourierServiceArea;
