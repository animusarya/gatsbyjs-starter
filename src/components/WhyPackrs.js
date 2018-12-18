import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .subtitle {
    margin-top: 1rem !important;
    margin-bottom: 8rem !important;
  }
  .column {
    .card {
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
        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus nec iaculis mauris. consectetur adipiscing
        elit. Phasellus nec iaculis mauris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
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
