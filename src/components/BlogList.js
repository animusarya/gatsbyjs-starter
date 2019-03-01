import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import gql from 'graphql-tag';

import BlogItem from './BlogItem';
import Pagination from './Pagination';

const mediumQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          createdAt
          uniqueSlug
          virtuals {
            totalClapCount
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
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
                const { edges: blogs } = data.allMediumPost;

                return blogs.map(blog => (
                  <BlogItem item={blog.node} key={blog.node.id} />
                ));
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </Container>
);

export default BlogList;
