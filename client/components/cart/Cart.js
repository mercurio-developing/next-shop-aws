import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Proptypes from "prop-types";
import CartStyle from "./Cart.scss";
import Card from "./Card";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const deleteCoin = this.deleteCoin.bind(this);
  }

  deleteCoin(id) {
    axios.post("/delete-coin", { id: id });
    Router.reload("/cart");
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
        <style dangerouslySetInnerHTML={{ __html: CartStyle }} />
        <div className="row p-4">
          <div className="col-xl-10 col-lg-10 mx-auto">
            <div className="row ">
              <button
                className="btn btn-primary btn-md"
                onClick={() => Router.push("/inventory")}
              >
                <i className="fas fa-arrow-left pr-2" />
                Back to Inventory
              </button>
            </div>
            <div className="row cart-row mt-5 mb-5">
              <div className="col-xl-12 col-lg-12">
                <div className="row h-100">
                  <div className="col-xl-8 col-lg-8 items-row p-4">
                    <label className="label-header">SHOPPING CART</label>
                    {coinsCartData.length === 0 ? (
                      <p>CART EMPTY</p>
                    ) : (
                      <Card
                        coinsCartData={coinsCartData}
                        deleteCoin={this.deleteCoin}
                      />
                    )}
                  </div>
                  <div className="col-xl-4 div lg-4 p-4">
                    <div className="row h-50">
                      <div className="col-xl-12 col-lg-12">
                        <div className="row h-75 order-row">
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
                    <div className="col-xl-6 col-lg-6 mx-auto mt-5">
                      <button
                        className="btn btn-md btn-gold"
                        onClick={() => Router.push("/checkout")}
                      >
                        CHECKOUT
                      </button>
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

Cart.propTypes = {
  coinsCartData: Proptypes.arrayOf(Object).isRequired
};

export default Cart;
