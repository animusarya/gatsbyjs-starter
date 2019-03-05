import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
  .control {
    padding: 1rem 40rem;
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  }
  .dropdown {
    width: 40rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .checkbox {
    margin-left: 1.1rem;
  }
`;

const Items = styled.div`
  .form-control {
    margin-top: 1rem;
  }
`;

class BusinessForm extends React.Component {
  render() {
    return (
      <Container>
        <div className="section-title">
          <h2>Become Business Partner with Packrs</h2>
          <p>What do you want to sell?</p>
        </div>

        <form>
          <div className="form-group control">
            <label htmlFor="exampleInputEmail1">Business Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Business Title here"
            />
          </div>
          <div className="form-group control">
            <label htmlFor="exampleFormControlTextarea1">
              About Your Business
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <div className="form-group control">
            <label htmlFor="exampleFormControlTextarea1">Category</label>
            <div className="select">
              <select className="dropdown">
                <option>+ Choose Category*</option>
                <option>Mobiles, Mobile Accessories, Electronics</option>
              </select>
            </div>
          </div>
          <Items className="form-group control">
            <label htmlFor="exampleInputEmail1">Items</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Price"
            />
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </Items>
        </form>
      </Container>
    );
  }
}

export default BusinessForm;
