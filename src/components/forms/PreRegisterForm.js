import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import {withFormik} from 'formik';

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

const PreRegisterForm = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
  } = props;
  return (
    <Container onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <div className="form-group has-feedback">
          <input
            type="text"
            name="telephone"
            className="form-control"
            value={values.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your phone number to get the app."
            id="inputSuccess4"
            aria-describedby="inputSuccess4Status"
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
};

export default withFormik ({
  mapPropsToValues: () => ({
    telephone: '',
  }),
  // validationSchema: Yup.object ().shape ({
  //   fullName: Yup.string ().required ('Full name is required!'),
  //   email: Yup.string ()
  //     .email ('Invalid email address')
  //     .required ('Email is required!'),
  //   telephone: Yup.string ().required ('Telephone is required!'),

  // }),
  handleSubmit: (values, {setSubmitting}) => {
    // console.log ('handle submit', values);
    const alertify = require ('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate ({
        mutation: preRegisterMutation,
        variables: {
          type: 'preRegister',
          formData: {
            telephone: values.telephone,
          },
        },
      })
      .then (() => {
        alertify.alert (
          'Thank you, Link for downloading app will be sent soon to your phone.'
        );
        setSubmitting (false);
      })
      .catch (() => {
        setSubmitting (false);
        alertify.alert ('Submission failed, please try again.');
      });
  },
  displayName: 'PreRegister', // helps with React DevTools
}) (PreRegisterForm);
