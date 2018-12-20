import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #fbfad3;
  padding: 5rem;
  @media only screen and (max-width: 769px) {
    padding: 3rem 1.5rem;
  }
  .subtitle {
    margin-top: 1rem !important;
    margin-bottom: 8rem !important;
    @media only screen and (max-width: 769px) {
      margin-bottom: 5rem !important;
    }
  }
  .column {
    .card {
      background-color: #fbfad3;
      box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0) !important;
      .card-image {
        display: flex !important;
        align-items: center;
        justify-content: center;
      }
    }
    .is-128x128 {
      width: 250px;
      height: 250px;
    }
  }
`;

const WhyPackrs = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <h1 className="title has-font-primary has-text-weight-bold is-size-1">
        Why Packrs ?
      </h1>
      <h2 className="subtitle">
        We are a product delivery platform trying to take all your
        transportation problems away.
      </h2>
      <div className="columns">
        <div className="column has-text-centered">
          <div className="card">
            <div className="card-image">
              <figure className="image is-128x128">
                <img
                  src="/images/timely-delivery.svg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <div className="title has-text-centered">Fast Delivery</div>
                Shoppers increasingly want their orders to arrive at their
                doorsteps as soon as they click a button, whether it's a hot
                meal, groceries or a sofa. We aim to deliver everything in blink
                of an eye.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-128x128">
                <img
                  src="/images/deliver-anywhere.svg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <div className="title has-text-centered">Deliver Anywhere</div>
                Able to deliver anything from anywhere, Packrs is the food
                delivery, grocery delivery, whatever-you-can-think-of delivery
                service to bring what you crave right to your door.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-128x128">
                <img src="/images/track-order.svg" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <div className="title has-text-centered">Track Delivery</div>
                Track your shipment or order on our app live. you are in contact
                with our delivery boys everytime. So, no delays, safe shipment
                and transparent mechanism from order to delivery.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default WhyPackrs;
