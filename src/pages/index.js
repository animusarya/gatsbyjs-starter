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
    const { edges: images } = data.allFile;
    // console.log(images);
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero refCode={location.search} />
        <ServiceArea />
        <AboutArea />
        <Features />
        <Slider images={images} />
        <AppDownload />
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
