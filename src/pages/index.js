import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Subscribe from '../components/Subscribe';
import ServiceArea from '../components/ServiceArea';
import AboutArea from '../components/AboutArea';
import Features from '../components/Features';
import Slider from '../components/Slider';
import AppDownload from '../components/AppDownload';
import Subscription from '../components/Subscription';

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
        <ServiceArea />
        <AboutArea />
        <Features />
        <Slider />
        <AppDownload />
        <Subscription />
      </Layout>
    );
  }
}
