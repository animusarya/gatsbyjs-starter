import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Container = styled.div``;

const IndexLayout = ({ children, path }) => {
  let fullHeader = true;
  if (path === '/courier-application/') {
    fullHeader = false;
  }
  if (path === '/courier-application-form/') {
    fullHeader = false;
  }
  return (
    <div>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      {fullHeader ? <Header /> : <Header isCourier />}

      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
