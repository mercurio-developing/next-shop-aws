import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Proptypes from "prop-types";
import CheckoutStyle from "./Checkout.scss";
import Form from "./Form";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Checkout() {
    axios.get("/delete-coin");
    Router.reload("/Checkout");
  }

  render() {
    const { coinsCartData } = this.props;
    let totalAmount;
    const reducer = (accumulator, currentValue) =>
      parseFloat(accumulator.price) + parseFloat(currentValue.price);

    if (coinsCartData.length > 1) {
      totalAmount = "$" + coinsCartData.reduce(reducer).toFixed(2);
    } else if (coinsCartData.length === 0) {
      totalAmount = "-";
    } else {
      totalAmount = "$" + coinsCartData[0].price;
    }
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CheckoutStyle }} />
        <div className="row p-4">
          <div className="col-xl-10 col-lg-10 mx-auto">
            <div className="row ">
              <button
                className="btn btn-primary btn-md"
                onClick={() => Router.push("/cart")}
              >
                <i className="fas fa-arrow-left pr-2" />
                Back to Inventory
              </button>
            </div>
            <div className="row checkout-row mt-5 mb-5">
              <div className="col-xl-12 col-lg-12">
                <div className="row h-100">
                  <div className="col-xl-4 div lg-4 p-4">
                    <div className="row h-50">
                      <div className="col-xl-12 col-lg-12">
                        <div className="row h-75 order-row p-2">
                          <label className="label-header">YOUR ORDER</label>
                          <div className="col-xl-10 col-lg-10 mx-auto mt-5">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right">
                                SUBTOTAL
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right order-price">
                                {totalAmount}
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-10 mx-auto">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right">
                                SHIPPING
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right pt-1 order-shipping">
                                FREE
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-10 mx-auto">
                            <div className="row line p-2">
                              <div className="col-xl-6 col-lg-6 text-right ">
                                TOTAL
                              </div>
                              <div className="col-xl-6 col-lg-6 text-right order-price">
                                {totalAmount}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 billing-row p-4">
                    <div className="row">
                      <div className="col-lg-12 col-xl-12">
                        <Form totalAmount={totalAmount} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Checkout.propTypes = {
  coinsCartData: Proptypes.arrayOf(Object).isRequired
};

export default Checkout;
