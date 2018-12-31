import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  .header-area {
    background-color: #33b7b7 !important;
  }
`;

const Logo = styled.div`
  color: #fff;
  font-weight: 900 !important;
  font-size: 30px;
  font-family: Nunito, sans-serif;
`;

const Header = () => (
  <Container id="header">
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="menu-area">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <Logo className="logo">PACKRS</Logo>
            </div>
            <div className="col-md-9 hidden-xs hidden-sm">
              <div className="main-menu">
                <nav className="nav-menu">
                  <ul>
                    <li className="active">
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#feature">Features</a>
                    </li>
                    <li>
                      <a href="#screenshot">Screenshot</a>
                    </li>
                    <li>
                      <a href="#download">Download</a>
                    </li>
                    <li>
                      <a href="#contact">Subscribe</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 visible-sm visible-xs">
              <div className="mobile_menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Header;
