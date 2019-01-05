import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BlogList from '../components/BlogList';

export default class Blog extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const location = this.props.location.pathname;
    return (
      <Layout path={location}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="Blog" />
        <BlogList />
      </Layout>
    );
  }
}
