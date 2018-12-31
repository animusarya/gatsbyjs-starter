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
        <h2>Features</h2>
        <p>A feature rich app with good UI</p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="ft-content rtl">
            <div className="ft-single">
              <img src="/img/1.png" alt="icon" />
              <div className="meta-content">
                <h2>Full Optional</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/2.png" alt="icon" />
              <div className="meta-content">
                <h2>Unique Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/3.png" alt="icon" />
              <div className="meta-content">
                <h2>Voice Maker</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
                </p>
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
                <h2>Easy Settings</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/5.png" alt="icon" />
              <div className="meta-content">
                <h2>Flat Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
                </p>
              </div>
            </div>
            <div className="ft-single">
              <img src="/img/6.png" alt="icon" />
              <div className="meta-content">
                <h2>Easy Download</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  iumod tempor incididunt
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
