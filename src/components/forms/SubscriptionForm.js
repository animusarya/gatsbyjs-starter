import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import config from '../../utils/config';

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
    background-color: ${props =>
      props.result === 'success' ? 'green' : '#33b760'} !important;
  }
  .c-social ul li a {
    background-color: #33b760 !important;
  }
  .message {
    position: absolute;
  }
  .social-buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    const { email } = this.state;
    e.preventDefault();
    const data = await addToMailchimp(email);
    console.log(data);
    this.setState({ email: '', message: data.msg });
    setTimeout(() => {
      this.setState({ message: '', result: data.result });
    }, 1000);
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { message, email, result } = this.state;
    return (
      <Container className="contact-area ptb--100" id="contact" result={result}>
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

                  <input
                    type="submit"
                    value={`${
                      result === 'success' ? ' Subscribed' : 'Subscribe'
                    }`}
                    id="send"
                  />
                  <br />
                  <span className="message">{message}</span>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 social-buttons">
              <div className="contact_info">
                <div className="c-social">
                  <ul>
                    <li>
                      <a href={config.fbUrl}>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href={config.twitterUrl}>
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li>
                      <a href={config.instagramUrl}>
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

export default SubscriptionForm;
