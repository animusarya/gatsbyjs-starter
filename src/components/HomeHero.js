import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #33b7b7f7 !important;
  .slider-inner h2 {
    font-size: 46px;
    @media screen and (max-width: 768px) {
      font-size: 23px !important;
    }
  }

  .form-control {
    height: 60px !important;
    border: 3px solid #fff !important;
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
    float: right !important;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    .btn {
      width: 30%;
      padding: 15px 20px;
      border-radius: 6rem;
      color: #18b9ba;
      transition: 0.5s;
      font-weight: 500;
      border-width: 2px;
      border-color: #fff;
      @media screen and (max-width: 768px) {
        width: 100% !important;
      }
    }
    .btn-default:hover {
      background-color: #18b9ba;
      border-color: #fff;
      border-width: 2px;
      color: #fff;
    }
  }
`;

const HomeHero = () => (
  <Container className="slider-area" id="home">
    <div className="container">
      <div className="col-md-6 col-sm-6 hidden-xs">
        <div className="row">
          <div className="slider-img">
            <img src="/img/hero-mockup.png" alt="sliderimage" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="row">
          <div className="slider-inner text-right">
            <h2>Deliver anything, anywhere</h2>
            <h5>Get app now !</h5>
            <div className="form-wrapper">
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number to get the app."
                  id="inputSuccess4"
                  aria-describedby="inputSuccess4Status"
                />

                <i className="fas fa-mobile-alt form-control-feedback" />
              </div>
              <div className="button-wrapper">
                <button type="button" className="btn btn-default">
                  Text Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeHero;
