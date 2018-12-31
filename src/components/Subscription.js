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

const Subscription = () => (
  <Container className="contact-area ptb--100" id="contact">
    <div className="container">
      <div className="section-title">
        <h2>Subscribe</h2>
        <p>Subscribe to us with your email to get daily updates</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="contact-form">
            <form action="#">
              <input type="text" name="name" placeholder="Enter Your Email" />

              <input type="submit" value="Subscribe" id="send" />
            </form>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="contact_info">
            <div className="c-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Subscription;
