import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import swal from 'sweetalert';

import apolloClient from '../../utils/apolloClient';

const Container = styled.form`
  .form-group {
    margin-left: 6rem;
    margin-right: 3rem;
    @media screen and (max-width: 768px) {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
  .form-control-feedback {
    right: 25px !important;
    height: 60px !important;
  }
  .warning {
    color: #fff;
    float: left;
    margin-top: -14px;
  }

  .form-control {
    height: 60px !important;
    border: 3px solid #fff !important;
    background-color: #3b9e9e !important;
    padding: 6px 40px !important;
    padding-left: 20px !important;
    font-size: 18px !important;
    color: #fff !important;
    letter-spacing: 0px !important ;
    ::placeholder {
      color: #fff;
      opacity: 1;
      font-weight: 100 !important;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .btn {
      width: 50% !important;
      padding: 15px 20px;
      border-radius: 6rem;
      color: #18b9ba;
      transition: 0.5s;
      font-weight: 600 !important;
      border-width: 2px;
      border-color: #fff;
      outline: 0;
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
  .button-wrapper {
    margin-top: 2rem;
    padding-left: 3rem;
    @media screen and (max-width: 768px) {
      padding-left: 0rem;
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
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    loading,
  } = props;
  return (
    <Container onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <div className="form-group has-feedback">
          <input
            type="number"
            name="telephone"
            className="form-control"
            value={values.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Add your mobile number"
            id="inputSuccess4"
            aria-describedby="inputSuccess4Status"
          />
          <i className="fas fa-mobile-alt form-control-feedback" />
        </div>
        {errors.telephone && touched.telephone && (
          <div className="warning">{errors.telephone}</div>
        )}

        <div className="button-wrapper">
          <button type="submit" className="btn btn-default">
            {loading ? (
              <span>
                <i className="fas fa-spinner fa-spin" /> Pre-Register
              </span>
            ) : (
              'Pre-Register'
            )}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: refCode => ({
    telephone: '',
    // refCode,
  }),

  validationSchema: Yup.object().shape({
    telephone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .test(
        'len',
        'Must be exactly 10 characters',
        val => val.toString().length === 10,
      )
      .required('A phone number is required'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    // console.log('handle submit', props.toggleLoading, props.loading);
    const { telephone } = values;
    props.toggleLoading();
    const newTelephone = telephone.toString();
    // console.log('refCode', values.refCode.refCode);

    apolloClient
      .mutate({
        mutation: preRegisterMutation,
        variables: {
          type: 'preRegister',
          formData: {
            telephone: `0091${newTelephone}`,
            // refCode: values.refCode.refCode,
          },
        },
      })
      .then(() => {
        swal({
          text: 'Thank you! We will revert back soon',
        });
        props.toggleLoading();
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        swal('Oops', 'Something went wrong!', 'error');
      });
    resetForm();
  },
  displayName: 'PreRegister', // helps with React DevTools
})(PreRegisterForm);
