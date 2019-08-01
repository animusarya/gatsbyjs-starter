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
  .download-btns a:hover {
    background-color: #fff;
    color: #33b760 !important;
  }
  a,
  a:visited {
    cursor: pointer;
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
          <a href="https://play.google.com/store/apps/details?id=com.packrs">
            <i className="fab fa-google-play" />
            Android App
          </a>
          <a href="https://apps.apple.com/us/app/packrs/id1474759357?ls=1">
            <i className="fab fa-apple" />
            iPhone App
          </a>
        </div>
      </div>
    </div>
  </Container>
);

export default AppDownload;
