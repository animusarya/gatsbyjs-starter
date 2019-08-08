import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .call-to-action:before {
    background-color: #33b760 !important;
  }
  .fa-google-play,
  .fa-apple {
    margin-right: 1rem;
  }
  .download-btns a:hover {
    background-color: #fff;
    color: #33b760 !important;
  }
  a,
  a:visited {
    cursor: pointer;
  }
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  li {
    font-size: 2.2rem;
    color: #ffffff;
    margin-bottom: 4.5rem;
    justify-content: center;
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: center;
      display: grid;
    }
  }
`;

const AvailableCities = () => (
  <Container>
    <div className="call-to-action ptb--100" id="download">
      <div className="container">
        <div className="section-title text-white">
          <h2>Available Cities</h2>
          <p>To serve best part of our services</p>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <ul>
              <li>Chandigarh</li>  
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul>
              <li>Jalandhar</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul>
              <li>Ludhiana</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul>
              <li>Amritsar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default AvailableCities;