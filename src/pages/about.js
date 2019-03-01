import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Markdown from 'react-markdown';

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

const Container = styled.div`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
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
    const { location } = this.props;

    return (
      <Layout path={location.pathname}>
        <Seo
          title="About"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="About" />
        <Container className="about-area ptb--100">
          <div className="container">
            <div className="row d-flex flex-center">
              <div className="col-md-12 col-sm-12 col-xs-12 d-flex flex-center">
                <div className="about-content">
                  <Markdown escapeHtml source={data.details} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
