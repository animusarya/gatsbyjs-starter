import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import ServiceArea from '../components/ServiceArea';
import AboutArea from '../components/AboutArea';
import Features from '../components/Features';
import Slider from '../components/Slider';
import AppDownload from '../components/AppDownload';
import Subscription from '../components/Subscription';

export default class IndexPage extends React.Component {
  render() {
    const location = this.props.location.pathname;
    return (
      <Layout path={location}>
        <Seo
          title="Packrs"
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
