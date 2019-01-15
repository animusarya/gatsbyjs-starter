import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactForm from '../components/forms/ContactForm';
import Breadcrumb from '../components/Breadcrumb';

export default class Contact extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Contact"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="Contact" />
        <ContactForm />
      </Layout>
    );
  }
}
