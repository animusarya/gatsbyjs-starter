import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

import PreRegisterForm from './forms/PreRegisterForm';

const Container = styled.section`
  background-color: #33b7b7f7 !important;
  .slider-inner h2 {
    font-size: 46px;

    @media screen and (max-width: 768px) {
      font-size: 23px !important;
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
  .first-loop-text {
    margin-right: 5px;
  }
`;

const TextLoopWrapper = styled.span``;

const TextLoopStyled = styled(TextLoop)``;

const AnythingTextStyled = styled.span`
  font-size: 42px !important;
  @media screen and (max-width: 768px) {
    font-size: 23px !important;
  }
`;

class HomeHero extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  render() {
    const { loading } = this.state;
    const { refCode } = this.props;
    const displayText = ['Parcels', 'Eatables', 'Grocery', 'Anything'];
    return (
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
                <h2>
                  <span className="first-loop-text">Deliver</span>
                  <TextLoopWrapper>
                    <TextLoopStyled
                      interval={2500}
                      // eslint-disable-next-line react/no-children-prop
                    >
                      <span>Parcels</span>
                      <span>Eatables</span>
                      <span>Grocery</span>
                      <AnythingTextStyled>Anything</AnythingTextStyled>
                    </TextLoopStyled>
                  </TextLoopWrapper>

                  <span className="second-text">, Anywhere</span>
                </h2>
                <h5>
                  Register now to get <span>100% discount </span>on your first
                  order!
                </h5>
                <PreRegisterForm
                  refCode={refCode}
                  loading={loading}
                  toggleLoading={this.toggleLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default HomeHero;
