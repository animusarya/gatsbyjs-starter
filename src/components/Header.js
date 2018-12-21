import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  padding: 1rem 0rem;
  background-color: #fff;
  @media only screen and (max-width: 769px) {
    padding: 0rem;
  }
`;

const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
`;

const Header = () => (
  <NavbarStyled
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <Logo className="is-size-2 has-text-primary">PACKRS</Logo>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        />
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item" />
        </div>
      </div>
    </div>
  </NavbarStyled>
);

export default Header;
