import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2.5rem;
  .single-team {
    box-shadow: 12px 12px 14px rgba(10,8,8,0.1), 0px 0px 7px rgba(10,0,0,0.1);
    :hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default ({ name, designation, imageUrl }) => (
  <Container className="col-md-4 col-sm-4 col-xs-12 col-6">
    <div className="single-team">
      <div className="team-thumb">
        <img src={imageUrl} alt="profile" />
      </div>
      <h4>{name}</h4>
      <span>{designation}</span>
    </div>
  </Container>
);
