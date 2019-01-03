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

const DeliveryRequirements = () => (
  <Container className="service-area">
    <div className="container">
      <div className="section-title">
        <h2>Delivery requirements*</h2>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <img src="/images/courier-feature-one.svg" alt="serviceimage" />
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="">
                <h2 className="title">Two Wheeler delivery:</h2>

                <ul>
                  <li>Any make or model 2-wheel scooter</li>
                  <li>Valid Driving License</li>
                  <li>Registration Certificate of two wheeler</li>
                  <li>Valid insurance for two wheeler</li>
                  <li>PAN Card</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default DeliveryRequirements;
