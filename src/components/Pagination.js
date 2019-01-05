import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .pagination ul {
    background: #33b760 !important;
  }
`;

const Pagination = () => (
  <Container>
    <div className="pagination-area">
      <div className="container">
        <div className="pagination">
          <ul>
            <li>
              <a href="#">OLDER POSTS</a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <span>3</span>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">NEWER POSTS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default Pagination;
