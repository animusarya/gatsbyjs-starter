import React from 'react';
import styled from 'styled-components';

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
`;

const AboutArea = () => (
  <Container className="about-area ptb--100">
    <div className="container">
      <div className="section-title">
        <h2>Why Packers ?</h2>
        <p>
          We are a product delivery platform trying to take all your
          transportation problems away.
        </p>
      </div>
      <div className="row d-flex flex-center">
        <div className="col-md-6 col-sm-6 hidden-xs">
          <div className="about-left-img">
            <img src="/img/abt-left-img.png" alt="aboutimage" />
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12 d-flex flex-center">
          <div className="about-content">
            <p>
              Aiming to deliver anything, anywhere, Packrs is the food delivery,
              parcel delivery, whatever-you-want delivery service to bring what
              you crave right to your door.We have partner merchants, many of
              them exclusive, and we’re adding more every day. Every customer
              enjoys a curated and tailored experience, showcasing the very best
              of their city. Just enter your address, find something you like,
              and add order for delivery.
            </p>
            <p>
              Once you place your order we’ll forward it to our couriers and you
              can watch us zigzag through the city streets to bring your package
              to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default AboutArea;
