import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class Subscribe extends React.Component {
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
    const { message, email } = this.state;

    console.log('message', message);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="column  is-size-3">Subscribe to our newsletter</div>
          <div className="column">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input is-rounded is-large"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                  aria-label="email"
                />
              </p>
              <p className="control is-hidden-mobile">
                <button
                  className="button is-primary is-rounded is-large"
                  type="submit"
                >
                  Subscribe
                </button>
              </p>
            </div>
            <span className="has-text-primary has-text-centered">
              {message}
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default Subscribe;
