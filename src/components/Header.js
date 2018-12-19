import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  padding: 2rem 0rem;
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
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
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
