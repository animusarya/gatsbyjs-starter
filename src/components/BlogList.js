import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import gql from 'graphql-tag';

import BlogItem from './BlogItem';
import Pagination from './Pagination';

const mediumQuery = graphql`
  query {
    allMediumUser {
      edges {
        node {
          id
          name
          username
          imageId
          userId
        }
      }
    }
  }
`;

const Container = styled.div``;

const BlogList = () => (
  <Container>
    <div className="blog-post-area">
      <div className="container">
        <div className="row">
          <div className="blog-list">
            <StaticQuery
              query={mediumQuery}
              render={data => {
                const { edges: blog } = data.allMediumUser;
                console.log(blog);
                return <BlogItem data={data} />;
              }}
            />

            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </Container>
);

export default BlogList;
