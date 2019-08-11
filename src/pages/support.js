import React from 'react';

class Support extends React.Component {
  componentDidMount() {
    window.location.replace("https://packrs.freshdesk.com/support/tickets/new");
  }

  render() {
    return(
      <p>Loading Please Wait...</p>
    );
  }
}

export default Support;
