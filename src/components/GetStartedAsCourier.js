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
    left: calc(0%);
  }
  .section-title h2:after {
    background-color: #fff;
  }
  ul {
    list-style-type: disc;
    margin: 18px 0;
    li {
      line-height: 30px !important;
    }
  }
  .section-title {
    text-align: left;
  }
`;

const GetStartedAsCourier = () => (
  <Container className="service-area">
    <div className="container">
      <div className="section-title">
        <h2>How to get started</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <h2 className="title">New to Packrs?</h2>

          <ul>
            <li>Sign up to deliver</li>
            <li>
              Consent to a safety screening and upload the required documents
            </li>
            <li>
              Once you are notified that you are active, you can begin to accept
              delivery requests
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <h2 className="title">Already an Packrs partner?</h2>

          <ul>
            <li>
              Open the Packrs app and navigate to Account then select Vehicle
              Options
            </li>
            <li>
              Accept the delivery terms to begin accepting delivery requests
            </li>

            <li>Turn delivery on and off as you wish</li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default GetStartedAsCourier;
