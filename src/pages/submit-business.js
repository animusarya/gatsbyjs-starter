import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BusinessForm from '../components/BusinessForm';

export default class SubmitBusiness extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <Seo title="Business" url={`${config.siteUrl}/submit-business`} image={config.image} />
        <Breadcrumb title="Business" />
        <BusinessForm />
      </Layout>
    );
  }
}
