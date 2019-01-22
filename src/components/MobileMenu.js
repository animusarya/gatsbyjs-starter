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
    position: absolute;
    z-index: 1;
    border-radius: 2rem;
    box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px;
    padding-top: 9rem;
  }

  .list-group {
    text-align: center;
    margin-bottom: 0px !important;
    .apply-as-courier {
      background-color: powderblue;
    }
    .apply-as-courier {
      color: #000;
    }
  }
`;

const MobileMenu = ({ isActive }) => (
  <Container className="mobile-menu">
    {isActive && (
      <ul className="list-group">
        <li className="list-group-item apply-as-courier">
          <Link
            to="/courier-application/"
            className="visible-xs visible-sm apply-as-courier"
          >
            APPLY AS COURIER
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/about/">About</Link>
        </li>
        <li className="list-group-item">
          <Link to="/blog/">Blog</Link>
        </li>
        <li className="list-group-item">
          <Link to="/contact/">Contact</Link>
        </li>
        <li className="list-group-item">
          <Link to="/privacy-policy/">Privacy Policy</Link>
        </li>
        <li className="list-group-item">
          <Link to="/terms-and-conditions/">T&C</Link>
        </li>
      </ul>
    )}
  </Container>
);

export default MobileMenu;
