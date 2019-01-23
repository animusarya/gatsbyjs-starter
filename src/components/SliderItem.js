import React from 'react';
import Img from 'gatsby-image';

export default ({ item }) => (
  <div className="single-screen">
    <Img fluid={item.node.childImageSharp.fluid} />
  </div>
);
