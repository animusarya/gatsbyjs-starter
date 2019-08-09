import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
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

const Features = () => (
  <Container className="feature-area bg-gray ptb--100" id="feature">
    <div className="container">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>What you can do with Packrs</p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="ft-content rtl">
            <div className="ft-single">
              <img src="/img/1.png" alt="icon" />
              <div className="meta-content">
                <h2>Book Anything</h2>
                <p>
                  We are deliver anything platform aiming to deliver anything
                  possible.
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/2.png" alt="icon" />
              <div className="meta-content">
                <h2>Unique Design</h2>
                <p>
                  The app has a unique design which cater to good user
                  experience.
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/3.png" alt="icon" />
              <div className="meta-content">
                <h2>Live Location</h2>
                <p>Track your deliveries on the go and be notified live.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 hidden-sm col-xs-12">
          <div className="ft-screen-img">
            <img src="/img/ft-screen-img.png" alt="imagemobile" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="ft-content">
            <div className="ft-single">
              <img src="/img/4.png" alt="icon" />
              <div className="meta-content">
                <h2>Apply As Partner</h2>
                <p>You can apply as a courier guy and earn bucks.</p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/5.png" alt="icon" />
              <div className="meta-content">
                <h2>Safe Delivery</h2>
                <p>
                  Your bookings are safe with us. We will handle them as our
                  own.
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/6.png" alt="icon" />
              <div className="meta-content">
                <h2>Refer Friends</h2>
                <p>
                  Refer your friends and on each signup, both you and your friend 
                  will get a signup bonus of ₹50 each.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Features;
