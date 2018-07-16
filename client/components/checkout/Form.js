import React, { Component } from "react";
import Proptypes from "prop-types";
import validator from "validator";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      address: "",
      email: "",
      city: "",
      zip: "",
      country: "United States",
      cardNumber: "",
      cardholder: "",
      expiredate: "",
      cvv: ""
    };
  }

  handleChange(e) {
    console.log(e);
  }

  validation(e) {
    e.preventDefault();
    const fullnameErr = validator.isEmpty(this.state.fullname);
    const addressErr = validator.isEmpty(this.state.address);

    console.log(fullnameErr, addressErr);
  }

  render() {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="row h-75 order-row p-2">
                <label className="label-header">SHIPPING INFO</label>
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div class="form-group">
                        <label>FULL NAME</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="FULL NAME"
                          onChange={e => {
                            this.handleChange(e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div class="form-group">
                        <label>ADDRESS</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="ADDRESS"
                        />
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <div class="form-group">
                        <label>EMAIL</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="EMAIL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div class="form-group">
                    <label>CITY</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="CITY"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div class="form-group">
                    <label>ZIP CODE</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="ZIP CODE"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label>COUNTRY</label>
                    <input
                      type="text"
                      class="form-control"
                      value="UNITED STATES"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row h-75 order-row p-2">
                <label className="label-header">CREDIT CARD INFO</label>
                <div className="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label>CARD NUMBER</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="CARD NUMBER"
                    />
                  </div>
                </div>

                <div className="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label>CARDHOLDER NAME</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="CARDHOLDER NAME"
                    />
                  </div>
                </div>

                <div className="col-xl-12 col-lg-12">
                  <div class="form-group">
                    <label>EXPIRE DATE</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="EXPIRE DATE"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div class="form-group w-50">
                    <label>CVV</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="CVV"
                    />
                  </div>
                </div>

                <div className="col-xl-12 col-lg-12">
                  <button
                    className="btn btn-md btn-gold float-right"
                    onSubmit={this.validation}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default Form;
