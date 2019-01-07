/* global $: true */
import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apolloClient from '../../utils/apolloClient';

const Container = styled.div`
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 8% 0 8%;
  margin: auto;
  @media screen and (max-width: 769px) {
    padding: 30% 0 8%;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #33b760;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4caf50;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before,
  .container:after {
    content: '';
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #ef3b3a;
  }
  .fa-check-circle {
    color: #fff;
    margin-right: 1rem !important;
  }
`;

const courierApplicationMutation = gql`
  mutation ContactForm($type: ContactType!, $formData: FormData!) {
    contactForm(input: { type: $type, formData: $formData }) {
      success
    }
  }
`;

class CourierApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      telephone: '',
      address: '',
      adharNumber: '',
      panNumber: '',
      success: false,
    };
  }

  componentDidMount = () => {
    $('.message a').click(() => {
      $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    });
  };

  handleChange = event => {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  handleSubmit = event => {
    const {
      fullName,
      email,
      telephone,
      panNumber,
      adharNumber,
      address,
    } = this.state;
    event.preventDefault();
    apolloClient
      .mutate({
        mutation: courierApplicationMutation,
        variables: {
          type: 'courierApplication',
          formData: {
            fullName,
            email,
            telephone,
            address,
            adharNumber,
            panNumber,
          },
        },
      })
      .then(result => console.log(result));
    setTimeout(() => {
      this.setState({
        fullName: '',
        email: '',
        telephone: '',
        address: '',
        adharNumber: '',
        panNumber: '',
        success: true,
      });
    }, 1000);
  };

  render() {
    const {
      fullName,
      email,
      telephone,
      panNumber,
      adharNumber,
      address,
      success,
    } = this.state;
    return (
      <Container className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="full name"
              value={fullName}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="telephone"
              value={telephone}
              placeholder="mobile"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="permanent address"
              value={address}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="panNumber"
              placeholder="PAN"
              value={panNumber}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="adharNumber"
              placeholder="adhar number"
              value={adharNumber}
              onChange={this.handleChange}
            />

            <button type="submit" value="submit">
              {success === true ? (
                <React.Fragment>
                  <i className="fas fa-check-circle" />
                  <span>Thanks for submission</span>
                </React.Fragment>
              ) : (
                'submit'
              )}
            </button>
          </form>
        </div>
      </Container>
    );
  }
}

export default CourierApplicationForm;
