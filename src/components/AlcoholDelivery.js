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
    max-width: 55%;
    height: auto;
  }
  .row {
    display: flex;
    @media screen and (max-width: 768px) {
      display: grid;
    }
  }
  .image {
    display: flex;
    justify-content: flex-end;
  }
  .content {
    font-size: 2.2rem;
    margin-top: 15%;
    padding-right: 35%;
    text-align: justify;
    @media screen and (max-width: 768px) {
      padding-right: 0;
    }
  }
  .col-xs-6 {
    @media screen and (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }
`;

const AlcoholDelivery = () => (
  <Container className="team-area bg-gray ptb--50" id="team">
    <div className="container">
      <div className="section-title">
        <h2>We Deliver More Than Meals.</h2>
        <p>We understand your feelings better than anyone else</p>
      </div>
      <div className="row">
        <div className="col-xs-6 image">
          <img src={img} alt="food delivered" />
        </div>
        <div className="col-xs-6">
          <p className="content">Get groceries and food delivered in under an hour so 
            you can spend your time living your best life. Whether 
            you need a gallon of milk or a handle of vodka, we get it.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default AlcoholDelivery;
