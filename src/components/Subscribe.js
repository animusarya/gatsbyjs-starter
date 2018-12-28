import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Container = styled.section`
  padding: 5rem;
  background-color: red;
  background-repeat: no-repeat;
  .message {
    position: absolute;
  }
`;

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    const { email } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email);
    this.setState({ email: '', message: result.msg });
    // setTimeout(() => {
    //   this.setState({ message: '' });
    // }, 2000);
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { message, email } = this.state;

    console.log('message', message);
    return (
      <Container className="section is-primary">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="columns">
              <div className="column has-text-white is-size-4">
                Subscribe to our newsletter for new updates
              </div>
              <div className="column">
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      className="input is-large"
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={this.handleChange}
                      aria-label="email"
                    />
                  </p>
                  <p className="control is-hidden-mobile">
                    <button className="button is-dark is-large" type="submit">
                      Subscribe
                    </button>
                  </p>
                </div>
                <span className="has-text-white has-text-centered message is-primary">
                  {message}
                </span>
              </div>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Subscribe;
