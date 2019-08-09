import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-bottom: 4rem;
  ul > li {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 4rem;
  }
  .col-lg-4 {
    margin-bottom: 4rem;
  }
  .single-price {
    box-shadow: 0px 0px 9px rgb(220, 213, 213);
  }
`;

const JobTitle = styled.div`
  justify-content: center;
  margin-top: 4rem;
`;

const Button = styled(Link)`
  border: 1px solid #33B760 !important;
  background-color: #33B760 !important;
  color: #fff !important;
  :hover {
    background-color: #54D681 !important;
    color: #33b7b7f7;
  }
`;

const Jobs = () => (
  <Container>
    <div className="col-lg-4 col-md-6">
      <div className="single-price">
        <JobTitle className="top-sec d-flex justify-content-between">
          <div className="top-right">
            <h2>React Native Developer</h2>
          </div>
        </JobTitle>
        <div className="end-sec">
          <ul>
            <li>2.5 GB Free Photos</li>
            <li>Secure Online Transfer Indeed</li>
            <li>Unlimited Styles for interface</li>
            <li>Reliable Customer Service</li>
            <li>Manual Backup Provided</li>
          </ul>
          <Button to="/contact/">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default Jobs;