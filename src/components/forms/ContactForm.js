import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { withFormik } from 'formik';

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
  .help {
    color: red !important;
    font-size: 15px;
    margin-top: -15px;
  }
`;

const contactMutation = gql`
  mutation ContactForm($type: ContactType!, $formData: FormData!) {
    contactForm(input: { type: $type, formData: $formData }) {
      success
    }
  }
`;

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Name"
                />
                {errors.fullName && touched.fullName && (
                  <div className="help">{errors.fullName}</div>
                )}
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
                {errors.email && touched.email && (
                  <div className="help is-danger">{errors.email}</div>
                )}
                <textarea
                  name="message"
                  id="msg"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                />
                {errors.message && touched.message && (
                  <div className="help is-danger">{errors.message}</div>
                )}
                <br />
                <input type="submit" value="Send" id="send" />
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="contact_info">
              <div className="s-info">
                <div className="meta-content">
                  <span>jalandhar,Punjab</span>
                </div>
              </div>
              <div className="s-info">
                <div className="meta-content">
                  <a href="tel:00911815195423">01815195423</a>
                </div>
              </div>
              <div className="s-info">
                <div className="meta-content">
                  <a href="mailto:hi@packrs.co" target="_top">
                    hi@packrs.co
                  </a>
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
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    fullName: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log('handle submit', values);
    const alertify = require('alertify.js'); // eslint-disable-line

    apolloClient
      .mutate({
        mutation: contactMutation,
        variables: {
          type: 'contact',
          formData: {
            fullName: values.fullName,
            email: values.email,
            message: values.message,
          },
        },
      })
      .then(() => {
        alertify.alert(
          'Thank you contacting us, we will get back to you soon.',
        );
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        alertify.alert('Contact form failed, please try again.');
      });
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
