import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apolloClient from '../../utils/apolloClient';

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

const contactMutation = gql`
  mutation ContactForm($type: ContactType!, $formData: FormData!) {
    contactForm(input: { type: $type, formData: $formData }) {
      success
    }
  }
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
    };
  }

  handleChange = event => {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  handleSubmit = event => {
    const { fullName, email, message } = this.state;
    event.preventDefault();
    apolloClient
      .mutate({
        mutation: contactMutation,
        variables: {
          type: 'contact',
          formData: {
            fullName,
            email,
            message,
          },
        },
      })
      .then(result => console.log(result));
    this.setState({
      fullName: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { fullName, email, message } = this.state;
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
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={fullName}
                    onChange={this.handleChange}
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    name="msg"
                    id="msg"
                    value={message}
                    onChange={this.handleChange}
                    placeholder="Your Message"
                  />
                  <input type="submit" value="Send" id="send" />
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact_info">
                <div className="s-info">
                  <div className="meta-content">
                    <span>jalandhar,</span>
                    <span>Punjab</span>
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
                    <span>packrsofficial@gmail.com</span>
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
