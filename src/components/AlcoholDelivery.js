/* global swal:true */
import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/alcohol.jpg';

const Container = styled.div`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
  }
  img {
    max-width: 45%;
    height: auto;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
  .row {
    display: flex;
  }
  .col-xs-6 {
    justify-content: center;
    display: flex;
  }
  .content {
    font-size: 2.2rem;
    margin-top: 15%;
    padding-right: 14%;
    text-align: justify;
    @media screen and (max-width: 768px) {
      padding-right: 0;
    }
  }
`;

const AlcoholDelivery = () => (
  <Container className="team-area bg-gray ptb--100" id="team">
    <div className="container">
      <div className="section-title">
        <h2>We deliver more than meals.</h2>
        <p>We understand your feelings better than anyone else</p>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <img src={img} alt="food delivered" />
        </div>
        <div className="col-xs-6">
          <p className="content">Get groceries and alcohol delivered in under an hour so 
            you can spend your time living your best life. Whether 
            you need a gallon of milk or a handle of vodka, we get it.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default AlcoholDelivery;
