import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourierApplicationForm from '../components/CourierApplicationForm';
import Subscription from '../components/Subscription';
import AppDownload from '../components/AppDownload';

export default class CourierApplyForm extends React.Component {
  render() {
    const location = this.props.location.pathname;

    return (
      <Layout path={location}>
        <Seo
          title="Apply as Courier"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />

        <CourierApplicationForm />
        <AppDownload />
        <Subscription />
      </Layout>
    );
  }
}
