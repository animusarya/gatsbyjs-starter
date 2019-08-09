import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .call-to-action:before {
    background-color: #33b760 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
  }
  a,
  a:visited {
    cursor: pointer;
  }
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
    color: #000 !important;
  }
  li {
    font-size: 2.2rem;
    color: #000;
    margin-bottom: 4.5rem;
    justify-content: center;
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: center;
      display: grid;
    }
  }
  p {
    color: #000 !important;
  }
`;

const AvailableCities = () => (
  <Container className="team-area bg-gray ptb--50" id="download">
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
  </Container>
);

export default AvailableCities;