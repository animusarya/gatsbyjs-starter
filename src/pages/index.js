import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import ServiceArea from '../components/ServiceArea';
import AboutArea from '../components/AboutArea';
import Features from '../components/Features';
import Slider from '../components/Slider';
import Team from '../components/Team';
import AppDownload from '../components/AppDownload';
import SubscriptionForm from '../components/forms/SubscriptionForm';
import AvailableCities from '../components/AvailableCities';
import AlcoholDelivery from '../components/AlcoholDelivery';

export default class IndexPage extends React.Component {
  render() {
    const { location, data } = this.props;
    const { edges: images } = data.allFile;
    // console.log(images);
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere, anytime"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero refCode={location.search} />
        <ServiceArea />
        <AboutArea />
        {/* <AlcoholDelivery /> */}
        <AppDownload />
        <Features />
        <Slider images={images} />
        <Team />
        <AvailableCities />
        <SubscriptionForm />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            id
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
