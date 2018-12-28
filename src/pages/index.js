import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import WhyPackrs from '../components/WhyPackrs';
import AppDownload from '../components/AppDownload';
import Subscribe from '../components/Subscribe';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero />
        <WhyPackrs />
        <AppDownload />
        <Subscribe />
      </Layout>
    );
  }
}
