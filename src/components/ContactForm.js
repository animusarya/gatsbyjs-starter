import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import config from '../utils/config';

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
  .message {
    position: absolute;
  }
  .social-buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

class ContactForm extends React.Component {
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
    // const { message, email } = this.state;
    return (
      <Container className="contact-area ptb--100" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Have any questions, directly contact us.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact-form">
                <form action="#">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <textarea name="msg" id="msg" placeholder="Your Message " />
                  <input type="submit" value="Send" id="send" />
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact_info">
                <div className="s-info">
                  <div className="meta-content">
                    <span>17 Bath Rd, Heathrow, Longford,Hounslow</span>
                    <span>TW7 1AB, UK</span>
                  </div>
                </div>
                <div className="s-info">
                  <div className="meta-content">
                    <span>+0123 456 789 78</span>
                    <span>+0123 456 789 78</span>
                  </div>
                </div>
                <div className="s-info">
                  <div className="meta-content">
                    <span>Support@domain.com</span>
                    <span>Example@Gmail.com</span>
                  </div>
                </div>
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

export default ContactForm;
