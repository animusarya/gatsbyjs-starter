import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourierApplicationForm from '../components/forms/CourierApplicationForm';
import SubscriptionForm from '../components/forms/SubscriptionForm';
import AppDownload from '../components/AppDownload';

export default class CourierApplyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  render() {
    const { location } = this.props;
    const { loading } = this.state;
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Apply as Courier"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}/courier-application-form`}
          image={config.image}
        />

        <CourierApplicationForm
          loading={loading}
          toggleLoading={this.toggleLoading}
        />
        <AppDownload />
        <SubscriptionForm />
      </Layout>
    );
  }
}
