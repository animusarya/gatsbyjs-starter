import React from 'react';
import styled from 'styled-components';

import TeamMember from './TeamMember';

const Container = styled.section`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
  }
`;

export default () => (
  <Container className="team-area bg-gray ptb--100" id="team">
    <div className="container">
      <div className="section-title">
        <h2>Our Amazing Team</h2>
        <p>Always focued to achieve goals</p>
      </div>
      <div className="row">
        <TeamMember
          name="Perminder Klair"
          designation="Founder & CEO"
          imageUrl="/images/perminder.jpeg"
        />
        <TeamMember
          name="Nasim Akthar"
          designation="Lead Developer"
          imageUrl="/images/nasim.jpeg"
        />
        <TeamMember
          name="Vipin Rawat"
          designation="UI/UX Designer"
          imageUrl="/images/vipin1.jpeg"
        />
        <TeamMember
          name="Balwinder Klair"
          designation="Marketing Strategist "
          imageUrl="/images/bal1.jpg"
        />
      </div>
    </div>
  </Container>
);
