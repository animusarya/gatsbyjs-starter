import React from 'react';
import styled from 'styled-components';

import Breadcrumb from '../components/Breadcrumb';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Jobs from '../components/Jobs';

const Section = styled.section``;

const Title = styled.div`
  justify-content: center;
`;

export default class Career extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Career"
          description="make your Career with Packrs"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="Career" />
        <Section className="pricing-area">
          <div className="container">
            <Title className="row d-flex justify-content-center">
              <div className="section-title text-center">
                <h2>Jobs Available with Packrs</h2>
                <p>Give wings to your dreams with us</p>
              </div>
            </Title>
            {/* <Jobs /> */}
          </div>
        </Section>
      </Layout>
    );
  }
}
