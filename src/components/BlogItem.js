import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .fa-calendar,
  .fa-comment {
    margin-right: 1rem;
  }
  .read-more {
    background-color: #33b760 !important;
  }
`;

const BlogItem = () => (
  <Container>
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="list-item">
        <div className="blog-thumbnail">
          <a href="blog-details.html">
            <img src="/img/blog/blog-post-img1.jpg" alt="blog thumbnail" />
          </a>
        </div>
        <h2 className="blog-title">
          <a href="blog-details.html">Work For Success</a>
        </h2>
        <div className="blog-meta">
          <ul>
            <li>
              <i className="fa fa-calendar" />
              12 Feb 2017
            </li>
            <li>
              <i className="fa fa-comment" />
              Comments
            </li>
          </ul>
        </div>
        <div className="blog-summery">
          <p>
            Lorem ipsum dolor sit amet, consectcing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. enim ad minim niam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis
          </p>
        </div>
        <a href="blog.html" className="read-more">
          Read More
        </a>
      </div>
    </div>
  </Container>
);

export default BlogItem;
