import React from 'react';
// import gql from 'graphql-tag';

// import apolloClient from '../utils/apolloClient';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Breadcrumb from '../components/Breadcrumb';

// const contactMutation = gql`
//   mutation ContactForm($type: ContactType!, $formData: FormData!) {
//     contactForm(input: { type: $type, formData: $formData }) {
//       success
//     }
//   }
// `;

export default class Contact extends React.Component {
  // handleSubmit = () => {
  //   apolloClient
  //     .mutate({
  //       mutation: contactMutation,
  //       variables: {
  //         type: 'contact',
  //         formData: { fullName: 'parminder klair', telephone: '123123' },
  //       },
  //     })
  //     .then(result => console.log(result));
  // };

  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere"
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <Breadcrumb title="Contact" />
        <ContactForm />
        {/* <div style={{ height: 200, marginTop: 100 }}>
          <button onClick={this.handleSubmit}>submit form</button>
    </div> */}
      </Layout>
    );
  }
}
