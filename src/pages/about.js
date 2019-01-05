import React from 'react';
import gql from 'graphql-tag';

import apolloClient from '../utils/apolloClient';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const query = gql`
  query Page($slug: String!) {
    page(slug: $slug) {
      id
      title
      details
    }
  }
`;

export default class Contact extends React.Component {
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

    return (
      <Layout>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <h1>{data.title}</h1>
        <p>{data.details}</p>
      </Layout>
    );
  }
}
