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
    const { items, itemName, itemPrice, itemImage } = this.state;
    const newItems = items.concat({ itemName, itemPrice });
    this.setState({
      items: newItems,
      itemName: '',
      itemPrice: '',
      itemImage: '',
    });
  };

  onSubmit = () => {
    const { name, about, category, items } = this.state;
    this.setState({ name: '', about: '', category: '', items: [] });
  };

  render() {
    const {
      name,
      about,
      category,
      itemName,
      itemPrice,
      itemImage,
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
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact-form">
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
                      <option value="Beauty">Beauty</option>
                      <option value="Books">Books</option>
                      <option value="Clothing & Accessories">
                        Clothing & Accessories
                      </option>
                      <option value="Electronics (Accessories)">
                        Electronics (Accessories)
                      </option>
                      <option value="Fashion Jewelry">Fashion Jewelry</option>
                      <option value="Food and Beverage">
                        Food and Beverage
                      </option>
                      <option value="Grocery & Gourmet Food">
                        Grocery & Gourmet Food
                      </option>
                      <option value="Handmade">Handmade</option>
                      <option value="Health & Personal Care">
                        Health & Personal Care
                      </option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Industrial & Scientific">
                        Industrial & Scientific
                      </option>
                      <option value="Luggage & Travel Accessories">
                        Luggage & Travel Accessories
                      </option>
                      <option value="Mobiles, Mobile Accessories">
                        Mobiles, Mobile Accessories
                      </option>
                      <option value="Music">Music</option>
                      <option value="Musical Instruments">
                        Musical Instruments
                      </option>
                      <option value="Office Products">Office Products</option>
                      <option value="Outdoors">Outdoors</option>
                      <option value="Personal Computers">
                        Personal Computers
                      </option>
                      <option value="Pharmaceuticals">Pharmaceuticals</option>
                      <option value="Professional Services">
                        Professional Services
                      </option>
                      <option value="Shoes, Handbags & Sunglasses">
                        Shoes, Handbags & Sunglasses
                      </option>
                      <option value="Software & Computer Games">
                        Software & Computer Games
                      </option>
                      <option value="Tools & Home Improvement">
                        Tools & Home Improvement
                      </option>
                      <option value="Toys & Games">Toys & Games</option>
                      <option value="Video, DVD & Blu-Ray">
                        Video, DVD & Blu-Ray
                      </option>
                      <option value="Watches">Watches</option>
                    </select>
                  </div>
                </div>
                <Items className="form-group control">
                  {items.length > 0 &&
                    items.map(item => <div>{item.itemName}</div>)}
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
                      name="itemImage"
                      value={itemImage}
                      onChange={this.onChange}
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
              </div>
            </div>
          </div>
          <div className="control">
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
          </div>
        </form>
      </Container>
    );
  }
}

export default BusinessForm;