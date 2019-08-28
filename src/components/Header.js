import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MobileMenu from './MobileMenu';

const Container = styled.header`
  .header-area {
    background-color: #2da2a2 !important;
    padding: 4px 0;
  }
  .header-region {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .apply-as-courier {
    color: #fff;
  }
  .apply-courier-btn {
    background-color: #666666;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    color: white;
    font-size: smaller;
    padding: 0 15px;
  }
  .burger-nav {
    display: inline-block;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }

  .bar1-active {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .bar2-active {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    opacity: 0;
  }

  .bar3-active {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  .main-menu nav ul li a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0;
    padding: 27px 22px;
    position: relative;
    padding-left: 0;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  .logo-text {
    color: #fff;
    font-weight: 900 !important;
    font-size: 30px;
    font-family: Nunito, sans-serif;
    margin-left: 1rem;
  }
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleMenu = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
    // console.log(isActive);
  };

  render() {
    // const { isHome } = this.props;
    const { isActive } = this.state;

    return (
      <React.Fragment>
        <Container id="header">
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="menu-area">
                  <div className="col-md-3 col-sm-12 col-xs-12 header-region">
                    <Logo className="logo" to="/">
                      <img
                        src="/images/packrs-logo.png"
                        alt="logo"
                        style={{ width: '70px', height: 'auto' }}
                      />
                      <span className="logo-text">PACKRS</span>
                    </Logo>
                    <div
                      className="burger-nav hidden-lg hidden-md"
                      onClick={this.toggleMenu}
                    >
                      <div className={isActive ? 'bar1-active' : 'bar1'} />
                      <div className={isActive ? 'bar2-active' : 'bar2'} />
                      <div className={isActive ? 'bar3-active' : 'bar3'} />
                    </div>
                  </div>
                  <div className="col-md-9 hidden-xs hidden-sm">
                    <div className="main-menu">
                      <nav className="nav-menu">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about/">About</Link>
                          </li>
                          <li>
                            <a href="https://news.packrs.co">News</a>
                          </li>
                          <li>
                            <Link to="/support/">Support</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xs-12 visible-sm visible-xs" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <MobileMenu isActive={isActive} />
      </React.Fragment>
    );
  }
}

export default Header;
