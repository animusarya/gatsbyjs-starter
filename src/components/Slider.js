/* global $:true */
import React from 'react';
import styled from 'styled-components';
import SliderItem from './SliderItem';

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
  .screen-slider .owl-dots .owl-dot {
    border: 1px solid #33b760 !important;
  }
  .screen-slider .owl-dots .active {
    background-color: #33b760 !important;
  }
`;

class Slider extends React.Component {
  componentDidMount() {
    async function screenSlider() {
      const owl = $('.screen-slider');
      owl.owlCarousel({
        loop: true,
        margin: 20,
        navigation: false,
        items: 5,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 2000,
        dotsEach: true,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 3,
          },
          760: {
            items: 3,
          },
          1080: {
            items: 5,
          },
          1920: {
            items: 5,
          },
        },
      });
    }
    screenSlider();
  }

  render() {
    const { images } = this.props;
    return (
      <Container className="screen-area bg-gray ptb--100" id="screenshot">
        <div className="container">
          <div className="section-title">
            <h2>Screenshot</h2>
            <p>The app is feature rich with top notch user experience. </p>
          </div>
          <img
            className="screen-img"
            src="/img/screen-slider.png"
            alt="mobile screen"
          />
          <div className="screen-slider owl-carousel">
            {images.map(item => (
              <SliderItem item={item} key={item} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default Slider;
