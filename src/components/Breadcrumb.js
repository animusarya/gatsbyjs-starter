import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  .crumbs-inner ul li a,
  .crumbs-inner h2 {
    color: #33b760 !important;
  }
`;

const Breadcrumb = ({ title }) => (
  <Container className="crumbs-area">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="crumbs-inner">
            <h2>{title}</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>{title}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Breadcrumb;
