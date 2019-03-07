import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  .mobile-menu {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    background-color: #00b7b8;
    position: fixed;
    z-index: 10000;
    border-radius: 2rem;
    box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px;
    top: 12%;
  }

  .list-group {
    text-align: center;
    margin-bottom: 0px !important;
    .apply-as-courier {
      background-color: powderblue;
      font-weight: 800;
    }
    .apply-as-courier {
      color: #000 !important;
    }
  }
`;

const LinkStyled = styled(Link)`
  font-weight: 700;
  color: #00b7b8 !important;
`;

const MobileMenu = ({ isActive }) => (
  <Container className="mobile-menu">
    {isActive && (
      <ul className="list-group">
        <li className="list-group-item apply-as-courier">
          <LinkStyled
            to="/courier-application/"
            className="visible-xs visible-sm apply-as-courier"
          >
            APPLY AS COURIER
          </LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/submit-business/">Submit Your Business</LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/about/">About</LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/blog/">Blog</LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/contact/">Contact</LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/privacy-policy/">Privacy Policy</LinkStyled>
        </li>
        <li className="list-group-item">
          <LinkStyled to="/terms-and-conditions/">T&C</LinkStyled>
        </li>
      </ul>
    )}
  </Container>
);

export default MobileMenu;
