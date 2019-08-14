import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourierHero from '../components/CourierHero';
import CourierServiceArea from '../components/CourierServiceArea';
import AppDownload from '../components/AppDownload';
import DeliveryRequirements from '../components/DeliveryRequirements';
import GetStartedAsCourier from '../components/GetStartedAsCourier';
import HowItWorks from '../components/HowItWorks';

export default class CourierApplication extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Layout path={location.pathname}>
        <Seo
          title="Apply as Courier"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}/courier-application`}
          image={config.image}
        />
        <CourierHero />
        <CourierServiceArea />
        <DeliveryRequirements />
        <HowItWorks />
        <GetStartedAsCourier />
        <AppDownload />
      </Layout>
    );
  }
}
