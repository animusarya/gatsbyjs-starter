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
  .check-box {
    margin-left: 1.1rem;
  }
`;

const Items = styled.div`
  .form-control {
    margin-top: 1rem;
  }
`;

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      about: '',
      category: '',
      itemName: '',
      itemPrice: '',
      itemImage: '',
      agree: false,
      items: [],
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addItem = () => {
    const { items, itemName, itemPrice } = this.state;
    const newItems = items.concat({ itemName, itemPrice });
    this.setState({ items: newItems, itemName: '', itemPrice: '' });
  };

  onSubmit = () => {
    const { name, about, category, items } = this.state;
    this.setState({ name: '', about: '', category: '', items: [] });
    console.log(name, about, category, items);
  };

  render() {
    const {
      name,
      about,
      category,
      itemName,
      itemPrice,
      // itemImage,
      agree,
      items,
    } = this.state;
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
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={this.onChange}
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
              name="about"
              value={about}
              onChange={this.onChange}
              rows="3"
            />
          </div>

          <div className="form-group control">
            <label htmlFor="exampleFormControlTextarea1">Category</label>
            <div className="select">
              <select
                className="dropdown"
                name="category"
                value={category}
                onChange={this.onChange}
              >
                <option>+ Choose Category*</option>
                <option value="Mobiles, Mobile Accessories, Electronics">
                  Mobiles, Mobile Accessories, Electronics
                </option>
              </select>
            </div>
          </div>
          <Items className="form-group control">
            {items.length > 0 && items.map(item => <div>{item.itemName}</div>)}
            <label htmlFor="exampleInputEmail1">Items</label>
            <input
              type="text"
              name="itemName"
              value={itemName}
              onChange={this.onChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control"
              name="itemPrice"
              value={itemPrice}
              onChange={this.onChange}
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addItem}
              disabled={
                itemName.length === 0 || itemPrice.length === 0
                // itemImage.length === 0
              }
            >
              Add Item
            </button>
          </Items>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="agree"
              value={!!agree}
              onChange={this.onChange}
            />
            <label
              className="form-check-label check-box"
              htmlFor="exampleCheck1"
            >
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </Container>
    );
  }
}

export default BusinessForm;
