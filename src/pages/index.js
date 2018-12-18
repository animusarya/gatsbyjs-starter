import React from 'react';
import { Link } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import WhyPackrs from '../components/WhyPackrs';
import AppDownload from '../components/AppDownload';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <HomeHero />
        <WhyPackrs />
        <AppDownload />
      </Layout>
    );
  }
}
