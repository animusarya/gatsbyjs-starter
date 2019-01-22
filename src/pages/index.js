import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import ServiceArea from '../components/ServiceArea';
import AboutArea from '../components/AboutArea';
import Features from '../components/Features';
import Slider from '../components/Slider';
import AppDownload from '../components/AppDownload';
import SubscriptionForm from '../components/forms/SubscriptionForm';

export default class IndexPage extends React.Component {
  render() {
    const { location, data } = this.props;

    return (
      <Layout path={location.pathname}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero
          refCode={location.search}
          img={data.imageOne.childImageSharp.fluid}
        />
        <ServiceArea />
        <AboutArea />
        <Features />
        <Slider />
        <AppDownload />
        <SubscriptionForm />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero-mockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
