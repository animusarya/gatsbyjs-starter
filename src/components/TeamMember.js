import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2.5rem;
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
