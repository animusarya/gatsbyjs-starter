import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { withFormik } from 'formik';

import apolloClient from '../../utils/apolloClient';

const Container = styled.form`
  .form-control-feedback {
    right: 25px !important;
    height: 60px !important;
  }
  .form-control {
    float: right !important;
    height: 60px !important;
    border: 3px solid #fff !important;
    background-color: transparent !important;
    padding: 6px 40px !important;
    font-size: 18px !important;
    color: #fff !important;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    .btn {
      width: 30%;
      padding: 15px 20px;
      border-radius: 6rem;
      color: #18b9ba;
      transition: 0.5s;
      font-weight: 500;
      border-width: 2px;
      border-color: #fff;
      @media screen and (max-width: 768px) {
        width: 100% !important;
      }
    }
    .btn-default:hover {
      background-color: #18b9ba;
      border-color: #fff;
      border-width: 2px;
      color: #fff;
    }
  }
`;

const preRegisterMutation = gql`
  mutation ContactForm($type: ContactType!, $formData: FormData!) {
    contactForm(input: { type: $type, formData: $formData }) {
      success
    }
  }
`;

class PreRegisterForm extends React.Component {
  state = {
    telephone: '',
  };

  handleChange = event => {
    this.setState({
      telephone: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    const { telephone } = this.state;
    event.preventDefault();
    apolloClient
      .mutate({
        mutation: preRegisterMutation,
        variables: {
          type: 'preRegister',
          formData: {
            telephone,
          },
        },
      })
      .then(result => console.log(result));
    setTimeout(() => {
      this.setState({ telephone: '' });
    }, 1000);
  };

  render() {
    const { telephone } = this.state;
    return (
      <Container onSubmit={this.handleSubmit}>
        <div className="form-wrapper">
          <div className="form-group has-feedback">
            <input
              type="number"
              name="telephone"
              className="form-control"
              value={telephone}
              placeholder="Enter your phone number to get the app."
              id="inputSuccess4"
              aria-describedby="inputSuccess4Status"
              onChange={this.handleChange}
            />
            <i className="fas fa-mobile-alt form-control-feedback" />
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-default">
              Text Me
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default PreRegisterForm;
