import React from 'react';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const query = gql`
  query Page($slug: String!) {
    page(slug: $slug) {
      id
      title
      details
    }
  }
`;

export default class FAQ extends React.Component {
  state = { data: {} };

  componentDidMount() {
    apolloClient
      .query({
        query,
        variables: {
          slug: 'about',
        },
      })
      .then(result => this.setState({ data: result.data.page }));
  }

  render() {
    const { data } = this.state;
    console.log('data', data);
    const { location } = this.props;

    return (
      <Layout path={location.pathname}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="FAQ" />
        <h1>{data.title}</h1>
        <p>{data.details}</p>
      </Layout>
    );
  }
}
