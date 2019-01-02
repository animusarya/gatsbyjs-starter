import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 600 !important;
  }
`;

const ServiceArea = () => (
  <Container className="service-area">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="service-single">
            <img src="/images/delivery.svg" alt="serviceimage" />
            <h2>Deliver anywhere</h2>
            <p>We deliver anything to you from your favourite places.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 col-6">
          <div className="service-single">
            <img src="/images/track-order.svg" alt="serviceimage" />
            <h2>Live tracking</h2>
            <p>Track your order on the go live on our app.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 col-6">
          <div className="service-single">
            <img src="/images/timely-delivery.svg" alt="serviceimage" />
            <h2>Fast delivery</h2>
            <p>Our couriers are no less than superheroes. They deliver fast.</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default ServiceArea;
