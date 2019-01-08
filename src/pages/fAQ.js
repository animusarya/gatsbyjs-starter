import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

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

export default class FAQ extends React.Component {
  state = { data: {} };

  componentDidMount() {
    apolloClient
      .query({
        query,
        variables: {
          slug: 'faq',
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
          title="FAQ"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="FAQ" />
        <Container className="about-area ptb--100">
          <div className="container">
            <div className="row d-flex flex-center">
              <div className="col-md-12 col-sm-12 col-xs-12 d-flex flex-center">
                <div className="about-content">
                  <p>
                    Aiming to deliver anything, anywhere, Packrs is the food
                    delivery, parcel delivery, whatever-you-want delivery
                    service to bring what you crave right to your door.We have
                    partner merchants, many of them exclusive, and we’re adding
                    more every day. Every customer enjoys a curated and tailored
                    experience, showcasing the very best of their city. Just
                    enter your address, find something you like, and add order
                    for delivery. Once you place your order we’ll forward it to
                    our couriers and you can watch us zigzag through the city
                    streets to bring your package to you. Once you place your
                    order we’ll forward it to our couriers and you can watch us
                    zigzag through the city streets to bring your package to
                    you. Once you place your order we’ll forward it to our
                    couriers and you can watch us zigzag through the city
                    streets to bring your package to you. Once you place your
                    order we’ll forward it to our couriers and you can watch us
                    zigzag through the city streets to bring your package to
                    you.Once you place your order we’ll forward it to our
                    couriers and you can watch us zigzag through the city
                    streets to bring your package to you.
                  </p>
                  <p>
                    Once you place your order we’ll forward it to our couriers
                    and you can watch us zigzag through the city streets to
                    bring your package to you. Once you place your order we’ll
                    forward it to our couriers and you can watch us zigzag
                    through the city streets to bring your package to you. Once
                    you place your order we’ll forward it to our couriers and
                    you can watch us zigzag through the city streets to bring
                    your package to you. Once you place your order we’ll forward
                    it to our couriers and you can watch us zigzag through the
                    city streets to bring your package to you. Once you place
                    your order we’ll forward it to our couriers and you can
                    watch us zigzag through the city streets to bring your
                    package to you.Once you place your order we’ll forward it to
                    our couriers and you can watch us zigzag through the city
                    streets to bring your package to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
