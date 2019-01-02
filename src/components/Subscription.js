import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Container = styled.section`
  h2 {
    font-family: Nunito, sans-serif !important;
    font-weight: 800 !important;
  }
  .section-title h2:before {
    background-color: #33b760;
  }
  .section-title h2:after {
    background-color: #33b760;
  }
  #send {
    background-color: #33b760 !important;
  }
  .c-social ul li a {
    background-color: #33b760 !important;
  }
`;

class Subscription extends React.Component {
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
    setTimeout(() => {
      this.setState({ message: '' });
    }, 2000);
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { message, email } = this.state;
    return (
      <Container className="contact-area ptb--100" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Subscribe</h2>
            <p>Subscribe to us with your email to get daily updates</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact-form">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="email"
                    name="name"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={this.handleChange}
                    aria-label="email"
                  />

                  <input type="submit" value="Subscribe" id="send" />
                  <br />
                  <span className="has-text-white has-text-centered message is-primary">
                    {message}
                  </span>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact_info">
                <div className="c-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/PackrsOfficial/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/PackrsOfficial">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/packrs_official/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Subscription;
