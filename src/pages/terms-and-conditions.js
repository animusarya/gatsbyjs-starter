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

export default class TermsAndConditions extends React.Component {
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
        <Breadcrumb title="Terms And Conditions" />
        <h1>{data.title}</h1>
        <p>{data.details}</p>
      </Layout>
    );
  }
}
