import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import swal from 'sweetalert';

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
  .help {
    color: red;
    float: left;
  }
`;

const courierApplicationMutation = gql`
  mutation ContactForm($type: ContactType!, $formData: FormData!) {
    contactForm(input: { type: $type, formData: $formData }) {
      success
    }
  }
`;

const CourierApplicationForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <Container className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && touched.fullName && (
            <span className="help">{errors.fullName}</span>
          )}
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <span className="help">{errors.email}</span>
          )}
          <input
            type="number"
            name="telephone"
            value={values.telephone}
            placeholder="mobile"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.telephone && touched.telephone && (
            <span className="help">{errors.telephone}</span>
          )}
          <input
            type="text"
            name="address"
            placeholder="permanent address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address && (
            <span className="help">{errors.address}</span>
          )}
          <input
            type="text"
            name="panNumber"
            placeholder="PAN"
            value={values.panNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.panNumber && touched.panNumber && (
            <span className="help">{errors.panNumber}</span>
          )}
          <input
            type="number"
            name="adharNumber"
            placeholder="adhar number"
            value={values.adharNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.adharNumber && touched.adharNumber && (
            <span className="help">{errors.adharNumber}</span>
          )}

          <button type="submit" value="submit" disabled={isSubmitting}>
            SUBMIT
          </button>
        </form>
      </div>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    fullName: '',
    email: '',
    telephone: '',
    address: '',
    panNumber: '',
    adharNumber: '',
  }),
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.number(),

    address: Yup.string().required('Address is required!'),
    panNumber: Yup.string().required('PAN is required!'),
    adharNumber: Yup.string().required('ADHAR is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log ('handle submit', values);
    const { telephone, adharNumber } = values;
    const newTelephone = telephone.toString();
    const newAdharNumber = adharNumber.toString();
    apolloClient
      .mutate({
        mutation: courierApplicationMutation,
        variables: {
          type: 'courierApplication',
          formData: {
            fullName: values.fullName,
            email: values.email,
            telephone: newTelephone,
            address: values.address,
            panNumber: values.panNumber,
            adharNumber: newAdharNumber,
          },
        },
      })
      .then(() => {
        swal({
          title: 'Thanks for submission! We will revert back soon.',
          icon: 'success',
        });
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        swal('Oops', 'Something went wrong!', 'error');
      });
  },
  displayName: 'CourierApplication', // helps with React DevTools
})(CourierApplicationForm);
