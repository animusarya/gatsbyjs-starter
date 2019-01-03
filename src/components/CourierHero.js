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
  .fa-arrow-right {
    margin-left: 1rem;
  }
  .slider-inner a {
    padding-left: 0px !important;
  }
`;

const CourierHero = () => (
  <Container className="slider-area" id="home">
    <div className="container">
      <div className="col-md-6 col-sm-6 col-xs-12 ">
        <div className="row">
          <div className="slider-inner text-right">
            <h2>Deliver with Packrs</h2>
            <h5>No boss. Flexible schedule. Quick pay.</h5>
            <a href="#">
              Sign up in minutes<i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 hidden-xs">
        <div className="row">
          <div className="slider-img">
            <img src="/images/delivery-guy.svg" alt="sliderimage" />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CourierHero;
