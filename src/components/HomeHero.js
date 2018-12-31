import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #33b7b7f7 !important;
  .form-control {
    height: 60px !important;
    border: 3px solid #fff !important;
    border-radius: 45px !important;
    background-color: transparent !important;
    padding: 6px 40px !important;
    font-size: 18px !important;
    color: #fff !important;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }
  }
  h2,
  h5 {
    font-family: Nunito, sans-serif !important;
    font-weight: 600 !important;
  }
  .svg-inline--fa.fa-w-10 {
    width: 1em !important;
    color: #fff !important;
  }
  .form-control-feedback {
    right: 25px !important;
    height: 60px !important;
  }
  .form-control {
    width: 65% !important;
    float: right !important;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
`;

const HomeHero = () => (
  <Container className="slider-area" id="home">
    <div className="container">
      <div className="col-md-6 col-sm-6 hidden-xs">
        <div className="row">
          <div className="slider-img">
            <img src="/img/slider-left-img.png" alt="sliderimage" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="row">
          <div className="slider-inner text-right">
            <h2>Most faster delivery hub</h2>
            <h5>Book Now !</h5>
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile number"
                id="inputSuccess4"
                aria-describedby="inputSuccess4Status"
              />

              <i className="fas fa-mobile-alt form-control-feedback" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeHero;
