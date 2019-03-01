import React from 'react';
import styled from 'styled-components';
import config from '../utils/config';

const Container = styled.div`
  .fa-calendar,
  .fa-comment {
    margin-right: 1rem;
  }
  .read-more {
    background-color: #33b760 !important;
  }
`;

const BlogItem = ({ item }) => {
  const url = `${config.mediumPublicationUrl}/${item.uniqueSlug}`;
  return (
    <Container>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="list-item">
          <div className="blog-thumbnail">
            <a href={url}>
              <img
                src={
                  item.virtuals.previewImage.imageId === ''
                    ? '/img/blog/blog-post-img1.jpg'
                    : `https://cdn-images-1.medium.com/max/800/${
                        item.virtuals.previewImage.imageId
                      }`
                }
                alt="blog thumbnail"
              />
            </a>
          </div>
          <h2 className="blog-title">
            <a href={url}>{item.title}</a>
          </h2>
          <div className="blog-meta">
            <ul>
              <li>
                <i className="fa fa-calendar" />
                {item.createdAt}
              </li>
              <li> Claps {item.virtuals.totalClapCount}</li>
            </ul>
          </div>
          <div className="blog-summery">
            <p>{item.virtuals.subtitle}</p>
          </div>
          <a
            href={url}
            className="read-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </Container>
  );
};

export default BlogItem;
