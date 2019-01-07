import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourierApplicationForm from '../components/forms/CourierApplicationForm';
import SubscriptionForm from '../components/forms/SubscriptionForm';
import AppDownload from '../components/AppDownload';

export default class CourierApplyForm extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Layout path={location.pathname}>
        <Seo
          title="Apply as Courier"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />

        <CourierApplicationForm />
        <AppDownload />
        <SubscriptionForm />
      </Layout>
    );
  }
}
