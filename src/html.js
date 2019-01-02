import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          />
      
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800,900"
            rel="stylesheet"
          /> */}
          {/* <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800,900"
            rel="stylesheet"
          /> */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/jquery-ui.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/slicknav.min.css" />
          <link rel="stylesheet" href="/css/magnificpopup.css" />
          <link rel="stylesheet" href="/css/jquery.mb.YTPlayer.min.css" />
          <link rel="stylesheet" href="/css/typography.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />

          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />
          <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" />
          {/* Add custom css or scripts here */}

          {/* Add custom css or scripts here */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/jquery-3.2.0.min.js" />
          <script src="/js/jquery-ui.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/jquery.slicknav.min.js" />
          <script defer src="/js/owl.carousel.min.js" />
          <script src="/js/magnific-popup.min.js" />
          <script src="/js/counterup.js" />
          <script src="/js/jquery.waypoints.min.js" />
          <script src="/js/jquery.mb.YTPlayer.min.js" />
          <script src="/js/theme.js" />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
