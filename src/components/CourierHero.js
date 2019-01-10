import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

  .slider-inner a {
    padding-left: 0px !important;
  }
  .fa-arrow-right {
    margin-left: 1rem;
    position: relative;
    -webkit-animation: mymove 0.5s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: 2; /* Safari 4.0 - 8.0 */
    animation: mymove 0.5s;
    animation-iteration-count: infinite;
  }
  @-webkit-keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 8px;
    }
  }

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 8px;
    }
  }
  .container {
    display: flex;
  }
  .signup {
    align-self: center;
    margin-right: 50px;
  }
`;

const Button = styled(Link)`
  :hover {
    background-color: #fff;
    color: #33b7b7f7;
  }
`;

const CourierHero = () => (
  <Container className="slider-area" id="home">
    <div className="container">
      <div className="col-md-6 col-sm-6 col-xs-12 signup">
        <div className="row">
          <div className="slider-inner text-right">
            <h2>Deliver with Packrs</h2>
            <h5>No boss. Flexible schedule. Quick pay.</h5>
            <Button to="/courier-application-form/">
              Sign up in minutes
              <i className="fas fa-arrow-right" />
            </Button>
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
