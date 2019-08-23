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
  <Container className="team-area ptb--100" id="team">
    <div className="container">
      <div className="section-title">
        <h2>Meet Our Amazing Team</h2>
        <p>Always focused to Achieve Goals</p>
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
          name="Gagan Saini"
          designation="Front-End Developer"
          imageUrl="/images/gagan.jpeg"
        />
        <TeamMember
          name="Vipin Rawat"
          designation="UI/UX Developer"
          imageUrl="/images/vipin1.jpeg"
        />
        <TeamMember
          name="Balwinder Klair"
          designation="Marketing Strategist "
          imageUrl="/images/bal1.jpg"
        />
        <TeamMember
          name="Sourav Arya"
          designation="Manager"
          imageUrl="/images/sourav.jpg"
        />
      </div>
    </div>
  </Container>
);
