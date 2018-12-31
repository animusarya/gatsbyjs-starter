/* global swal:true */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .call-to-action:before {
    background-color: #33b760 !important;
  }
  .fa-google-play,
  .fa-apple {
    margin-right: 1rem;
  }
`;

const AppDownload = () => (
  <Container>
    <div className="call-to-action ptb--100" id="download">
      <div className="container">
        <div className="section-title text-white">
          <h2>Download Our App</h2>
          <p>Our app is available both on android and ios platforms</p>
        </div>
        <div className="download-btns btn-area text-center">
          <a onClick={() => swal('Coming soon !')}>
            <i className="fab fa-google-play" />play store
          </a>

          <a onClick={() => swal('Coming soon !')}>
            <i className="fab fa-apple" />app store
          </a>
        </div>
      </div>
    </div>
  </Container>
);

export default AppDownload;
