/* global swal:true */
import React from 'react';
import styled from 'styled-components';

import BlogItem from './BlogItem';
import Pagination from './Pagination';

const Container = styled.div``;

const BlogList = () => (
  <Container>
    <div className="blog-post-area">
      <div className="container">
        <div className="row">
          <div className="blog-list">
            <BlogItem />
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
