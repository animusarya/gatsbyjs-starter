import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import BlogList from '../components/BlogList';

export default class Blog extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <Seo
          title="News"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}/blog`}
          image={config.image}
        />
        <Breadcrumb title="News" />
        <BlogList />
      </Layout>
    );
  }
}
